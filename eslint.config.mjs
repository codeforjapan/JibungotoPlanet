import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __dirname = dirname(fileURLToPath(import.meta.url))

// eslint-config-next 15 は旧形式（.eslintrc）の設定しか提供していないため、
// FlatCompat で読み込む。Next 16 に上げたら eslint-config-next の flat config に置き換える
const compat = new FlatCompat({ baseDirectory: __dirname })

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
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/warnings'
    ],
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    },
    rules: {
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
  })
]

export default eslintConfig
