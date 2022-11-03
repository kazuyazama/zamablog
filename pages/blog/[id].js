import { client } from "../../libs/client";
import * as cheerio from 'cheerio';
import Seo from "../../components/Seo";
import CategoryIndex from "../../components/CategoryIndex";
import BlogItem from "../../components/BlogItem";
import SearchForm from "../../components/SearchForm";

// export default function BlogId({ blog,category}) {


//   //目次作成用
//   const renderToc = (body) => {
//       const $ = cheerio.load(body);
//       const headings = $('h1, h2, h3').toArray();
//       const toc = headings.map((data) => ({
//         text: data.children[0].data ,
//         id: data.attribs.id
//       }));
  
//     return toc;
//   };



  
//   const toc = renderToc(blog.body);
//   // console.log(toc)
  
//     return (
//     <>
//         <Seo  
//         pageTitle={blog.title}
//         pageDescription={blog.description}
//         pageImg={blog.image.url}
//         />
//       <main className="container mx-auto">
//       <contaier className="md:flex flex-row">

//         <div className="p-8 md:p-0 basis-3/4">
//           <BlogItem blog={blog} toc={toc}/>
    
//         </div>

//         <div className="basis-1/4">
//           <CategoryIndex category={category}/>
//           <SearchForm />
        
        
//         </div>

//       </contaier>   

//       </main>
//     </>
//     );
// }

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({endpoint:"blog"});
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {paths,fallback:false}
  
}



// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({endpoint:"blog",contentId:id});
  // const data = await client.get({endpoint:"blog",contentId:params?.id ?? ''});

  // カテゴリーコンテンツの取得
  const categoryData = await client.get({endpoint:"categories"})
  
  return {
    props:{
        category:categoryData.contents,
        // blog:data,
        data:{       //このデータはこの記事参考に作った　https://zenn.dev/aiji42/articles/46ac448d95e847
          ...data,
          body:replaceBody(data),
        } 
      },
      revalidate: 3600
  }
}

// ショートコードをリッチエディタに埋め込む為の関数
export const replaceBody = ({ body, shortCodes }) => {
  console.log(shortCodes)
  const shortCodesMap =
    shortCodes?.reduce(
      (res, { code, body }) => ({ ...res, [code]: body }),
      {}
    ) ?? {}
  return body
    .replace(/&lt;&lt;(.+?)&gt;&gt;/g, (...[, key]) => shortCodesMap[key])
}


export default function BlogId({category,data}) {


  //目次作成用
  const renderToc = (body) => {
      const $ = cheerio.load(body);
      const headings = $('h1, h2, h3').toArray();
      const toc = headings.map((data) => ({
        text: data.children[0].data ,
        id: data.attribs.id
      }));
  
    return toc;
  };

  
  const toc = renderToc(data.body);
  // console.log(toc)
  
    return (
    <>
        <Seo  
        pageTitle={data.title}
        pageDescription={data.description}
        pageImg={data.image.url}
        />
      <main className="container mx-auto">
      <contaier className="md:flex flex-row">

        <div className="p-8 md:p-0 basis-3/4">
          <BlogItem blog={data} toc={toc} 
          // toc={toc}
          />
    
        </div>

        <div className="basis-1/4">
          <CategoryIndex category={category}/>
          <SearchForm />
        
        
        </div>

      </contaier>   

      </main>
    </>
    );
}







    // // 静的生成のためのパスを指定します
    // export const getStaticPaths = async () => {
    //   const data = await client.get({endpoint:"blog"});
    //   const paths = data.contents.map((content) => `/blog/${content.id}`);
    //  
    //   return {paths,fallback:true}
    // }
  
    // // データをテンプレートに受け渡す部分の処理を記述します
    // export const getStaticProps = async (context) => {
   

      //  // カテゴリーコンテンツの取得
      //  const categoryData = await client.get({endpoint:"categories"})
      //  return {
      //      props:{
      //          blog:data,
      //          category:categoryData.contents,
      //      }
      //  }

    //   const { params, previewData } = context
    //   if (!params?.id) {
    //     throw new Error('Error: ID not found')
    //   }
    
    //   const isDraft = (arg) => {
    //     if (!arg?.draftKey) {
    //       return false
    //     }
    //     return typeof arg.draftKey === 'string'
    //   }
    
    //   const id = params.id;
    //   /* requestのクエリパラメータを生成*/
    //   const draftKey = isDraft(previewData)
    //     ? { draftKey: previewData.draftKey }
    //     : {}
    
    //   /* draftKeyを付与してリクエストを投げる */
    //   try {
    //     const data = await client.getListDetail({
    //       // endpoint:"categories"
    //       endpoint: "blog",
    //       contentId: id,
    //       queries: draftKey
    //     });
    //     return {
    //       props: {
    //         blog: data,
    //         ...draftKey,
          
    //       },
    //     };
    //   } catch (e) {
    //     /* 失敗したら404 */
    //     return { notFound: true }
    //   }
     
       
   
    // }
  


  
