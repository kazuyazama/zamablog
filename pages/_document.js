import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" data-theme="cupcake">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/logo.png" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}