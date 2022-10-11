//プレビュー画面用

import { client } from "../libs/client";
import BlogItem from "../components/BlogItem";
import SearchForm from "../components/SearchForm";

export default function Article({ blog, draftKey }) {
  return blog ? (
    <>      
      {/* プレビューモードであるという表示 */}
      <main className="container mx-auto">
      {draftKey && (
        <div>
          現在プレビューモードで閲覧中です。
        </div>
      )}
      <contaier className="md:flex flex-row">

        <div className="p-8 md:p-0 basis-3/4">
          <BlogItem blog={blog}/>
        </div>
        <div className="basis-1/4">
          <SearchForm />
        </div>
      </contaier>   
      </main>

    </ >
  ) : (
    <div>no content</div>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({endpoint:"blog"});
  const paths = data.contents.map((content) => `/${content.slug}`);
  return { paths, fallback: true };
};
 
 
export const getStaticProps = async (context) => {
   
    const { params, previewData } = context
    if (!params?.slug) {
      throw new Error('Error: ID not found')
    }
  
    const isDraft = (arg) => {
      if (!arg?.draftKey) {
        return false
      }
      return typeof arg.draftKey === 'string'
    }
  
    const slug = params.slug;
    /* requestのクエリパラメータを生成*/
    const draftKey = isDraft(previewData)
      ? { draftKey: previewData.draftKey }
      : {}
  
    /* draftKeyを付与してリクエストを投げる */
    try {
      const data = await client.getListDetail({
        endpoint: "blog",
        contentId: slug,
        queries: draftKey
      });
      return {
        props: {
          blog: data,
          ...draftKey,
        
        },
      };
    } catch (e) {
      /* 失敗したら404 */
      return { notFound: true }
    }
   
 
}