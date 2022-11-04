import Head from 'next/head';

const Seo = ({ pageTitle, pageDescription, pagePath, pageImg, pageImgWidth, pageImgHeight }) => {
  const defaultTitle = 'ざまのブログ';
  const defaultDescription = '28歳、経営者です。プログラミング歴６ヶ月の駆け出しです。プログラミングで学んだ情報などを保存するノートがてら発信していきます。';
  const defautlImg = '/logo.png';

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;
  const imgUrl = pageImg ? pageImg : defautlImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 600;
  const imgHeight = pageImgHeight ? pageImgHeight : 315;

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