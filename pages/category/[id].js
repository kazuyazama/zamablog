import { client } from "../../libs/client";
import BlogIndex from "../../components/BlogIndex";
import SearchForm from "../../components/SearchForm";
import CategoryIndex from "../../components/CategoryIndex";
import Seo from "../../components/Seo";

export default function CategoryId({  blog ,category }) {
    console.log(blog)
    if(blog.length === 0) {
        return <div className="container mx-auto text-center">ブログコンテンツがありません</div>;
    }
    return (
      <>
      <Seo pageTitle={blog[0].category.name} pageDescription={`カテゴリ：${blog[0].category.name}`} />
      <div className="container mx-auto">  
      <div className="md:flex flex-row">
       
        <div className="px-8 md:px-auto basis-3/4 ">


        <div key={category.id} className="pb-5">
              <h1 className="border-b-2 pl-2">{`カテゴリ：${blog[0].category.name}`}</h1> 
        </div>
  
      
        
          <BlogIndex blog={blog} />
        </div>

        <div className="basis-1/4">
          <CategoryIndex category={category}/>
          <SearchForm />

        </div>
       

      </div>

      </div>
      </>
    )      
     
  }


  // 静的生成のためのパスを指定します
  export const getStaticPaths = async () => {
    const data = await client.get({endpoint:"categories"});
    const paths = data.contents.map((content) => `/category/${content.id}`);
    return {paths,fallback:false}
  }


  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint:"blog",queries:{filters:`category[equals]${id}`}});
    // カテゴリーコンテンツの取得
    const categoryData = await client.get({endpoint:"categories",})
    return {
        props:{
            blog:data.contents,
            category:categoryData.contents,
        }
    }
  }

  
