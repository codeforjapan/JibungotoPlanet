import { FC, useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const HeadElm: FC = () => {
  const { asPath } = useRouter()

  const generatedUrl = useMemo(() => {
    return `https://www.jibungoto-planet.jp${asPath}`
  }, [asPath])

  const generatedImage = useMemo(() => {
    if (asPath.includes('result') || asPath.includes('completion')) {
      return (
        process.env.NEXT_PUBLIC_SNS_SHARE_OGP_PATH ??
        `https://www.jibungoto-planet.jp/ogp-sns-sharing.jpg`
      )
    } else {
      return (
        process.env.NEXT_PUBLIC_OGP_IMAGE_PATH ??
        ` https://www.jibungoto-planet.jp/ogp.jpg`
      )
    }
  }, [])

  return (
    <Head>
      <title>じぶんごとプラネット</title>
      <meta
        property="description"
        content="脱炭素で持続可能な未来のために、ひとりひとりが今の生活スタイルの気候変動への影響を知り、小さなことから一つずつアクションを起こす。こうして「じぶんごと」の輪が広がっていきます。"
        key="description"
      />
      <meta property="og:title" content="じぶんごとプラネット" key="ogtitle" />
      <meta
        property="og:description"
        content="脱炭素で持続可能な未来のために、ひとりひとりが今の生活スタイルの気候変動への影響を知り、小さなことから一つずつアクションを起こす。こうして「じぶんごと」の輪が広がっていきます。"
        key="ogdescription"
      />
      <meta property="og:url" content={generatedUrl} key="ogurl" />
      <meta property="og:type" content={'website'} key="ogtype" />
      <meta property="og:image" content={generatedImage} key="ogimage" />
      <meta
        property="og:site_name"
        content="Code for Japan"
        key="ogsite_name"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codeforjapan" />
      <meta name="twitter:creator" content="@codeforjapan" />
      <meta name="twitter:title" content="じぶんごとプラネット" />
      <meta
        name="twitter:description"
        content="脱炭素で持続可能な未来のために、ひとりひとりが今の生活スタイルの気候変動への影響を知り、小さなことから一つずつアクションを起こす。こうして「じぶんごと」の輪が広がっていきます。"
      />
      <meta name="twitter:image" content={generatedImage} />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
    </Head>
  )
}

export default HeadElm
