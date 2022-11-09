import Script from 'next/script'

function Gtag() {
  return (
    <div className="container">
      {/* Global site tag (gtag.js) - Google Analytics  */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZBXC17H71W"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-ZBXC17H71W');
        `}
      </Script> */}
    </div>
  )
}

export default Gtag