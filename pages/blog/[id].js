import { client } from "../../libs/client";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import CategoryIndex from "../../components/CategoryIndex";
import BlogItem from "../../components/BlogItem";

export default function BlogId({ blog }) {
    return (
      <Layout>
        <Seo
        pageTitle={blog.title}
        pageDescription={blog.body}
        // pageImg={blog.image.url}
        // pageImgWidth={1280}
        // pageImgHeight={960}
      />

      <main className="container mx-auto">
      <contaier className="flex flex-row">

        <div className="basis-3/4">
          <BlogItem blog={blog}/>
        </div>
         
        <div className="basis-1/4">
        
        </div>

      </contaier>   
 
      </main>
      </Layout>
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
    return {
        props:{
            blog:data,
        }
    }
  }

