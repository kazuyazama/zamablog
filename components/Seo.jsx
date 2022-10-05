import Head from 'next/head';

const Seo = ({ pageTitle, pageDescription, pagePath, pageImg, pageImgWidth, pageImgHeight }) => {
  const defaultTitle = 'ざまのブログ';
  const defaultDescription = '28歳、経営者です。通信業界に10年携わっておりましたが、大きく舵を切ろうとしています。なのでこの際、通信業界の見えない部分などを全て全て公開していこうと思います。主に通信、ローカル情報、プログラミングなどで地味に役立つ情報を発信していきます。';
  const defautlImg = 'https://images.microcms-assets.io/assets/b5a02812e4554b0795bbc72514d3cf69/eb9c29e4d2014abea9c2afa91e43d608/IMG_7467.JPG';

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;
  const imgUrl = pageImg ? pageImg : defautlImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1200;
  const imgHeight = pageImgHeight ? pageImgHeight : 630;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="canonical" href={url} />
      
    </Head>
  );
};

export default Seo;