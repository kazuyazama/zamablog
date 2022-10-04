import { client } from "../../libs/client";
import Seo from "../../components/Seo";
import CategoryIndex from "../../components/CategoryIndex";
import BlogItem from "../../components/BlogItem";
import SearchForm from "../../components/SearchForm";

export default function BlogId({ blog,category }) {
    return (
    <>
        <Seo  
        pageTitle={blog.title}
        pageDescription={blog.description}
        pageImg={blog.image.url}
        />
      <main className="container mx-auto">
      <contaier className="md:flex flex-row">

        <div className="p-8 md:p-0 basis-3/4">
          <BlogItem blog={blog}/>
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
     
  // カテゴリーコンテンツの取得
    const categoryData = await client.get({endpoint:"categories"})
    return {
        props:{
            blog:data,
            category:categoryData.contents,
        }
    }
  }


  
