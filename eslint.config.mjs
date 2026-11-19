import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

const withoutPlugins = (config) =>
  Object.fromEntries(Object.entries(config).filter(([key]) => key !== 'plugins'))

const eslintConfig = [
  {
    // ESLint 9 は .gitignore を読まず、既定で除外するのは node_modules と .git だけなので、
    // .gitignore にあるビルド成果物などを明示的に除外する。
    // src/ は削除済みの Amplify バックエンドの名残で、手元にだけ残っていることがある
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'coverage/**',
      '.vercel/**',
      'next-env.d.ts',
      'src/**'
    ]
  },
  {
    // flat config では、files に含まれない拡張子は検査されないため明示する
    files: ['**/*.{js,jsx,mjs,ts,tsx}']
  },
  ...nextVitals,
  prettier,
  // import プラグインは eslint-config-next が登録済みなので、推奨設定から plugins を除いて使う
  withoutPlugins(importPlugin.flatConfigs.recommended),
  withoutPlugins(importPlugin.flatConfigs.warnings),
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    },
    rules: {
      // eslint-plugin-react-hooks 7（eslint-config-next 16 に同梱）で増えた React Compiler 向けのルール。
      // Next 15 のときと同じ検査内容に保つため、この移行では無効にしておく。
      // 既存コードに違反があり（set-state-in-effect 7件、preserve-manual-memoization 3件）、別途対応する
      'react-hooks/config': 'off',
      'react-hooks/error-boundaries': 'off',
      'react-hooks/gating': 'off',
      'react-hooks/globals': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/incompatible-library': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/set-state-in-render': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/unsupported-syntax': 'off',
      'react-hooks/use-memo': 'off',
      'import/named': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // 1. fsや path などの node "builtin" のモジュール
            'external', // 2. npm install したパッケージ
            'internal', // 3. webpack などでパス設定したモジュール
            ['parent', 'sibling'], // 4. 親階層と小階層のファイル
            'object', // object"-imports
            'type', // 型だけをインポートする type imports
            'index' // 同階層のファイル
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            // react, next 関連を external より前にする
            {
              pattern: 'react',
              group: 'builtin',
              position: 'after'
            },
            {
              pattern: '{next,next/**}',
              group: 'external',
              position: 'before'
            },
            // `@/app`, `@/features/`, `@/libs` の import をひとグループにして internal の前に
            {
              pattern: '{@/app/**,@/features/**,@/libs/**}',
              group: 'internal',
              position: 'before'
            },
            // `@/components`, `@/pages` の import をグルーピング. aliasの設定いつかやるマン
            {
              pattern: '{@/components/**,@/pages/**}',
              group: 'internal',
              position: 'before'
            },
            // CSS module を一番最後に
            {
              pattern: './**.module.css',
              group: 'index',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['react']
        }
      ]
    }
  }
]

export default eslintConfig
