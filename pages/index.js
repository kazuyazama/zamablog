import { client } from "../libs/client";
import Layout from "../components/Layout";
import BlogIndex from "../components/BlogIndex";
import CategoryIndex from "../components/CategoryIndex";
import SearchForm from "../components/SearchForm";

import Seo from "../components/Seo";

export default function Home({blog,category}) {


  return (
    <>
    <Seo 
    pageTitle="ざまのブログ"
    />
    <Layout>
    <main className="container mx-auto">
      <container className="flex flex-row">

        <div className="basis-3/4">
          <BlogIndex blog={blog} />
        </div>
         
        <div className="basis-1/4">
          <CategoryIndex category={category}/>
          <SearchForm />
        
        </div>

      </container>   
    </main>
    </Layout>

    
    </>

  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({endpoint:"blog"})


 
// カテゴリーコンテンツの取得
  const categoryData = await client.get({endpoint:"categories"})



  return {
    props:{
      blog:data.contents,
      category:categoryData.contents,
      
    }
  }
}


