import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" data-theme="cupcake">
      <Head>
      {/* // Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PDP7CTN')`}} />

      {/* google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/logo.png" /> 
      </Head>
      <body>
      {/* Google Tag Manager */}
      <noscript dangerouslySetInnerHTML={{
        __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDP7CTN"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} /> 
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}