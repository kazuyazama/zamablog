import Image from "next/image";
import Moment from "react-moment";

const BlogItem = ({blog,toc}) => {

    return (
      <>
        <div>
        <Image className="py-5 rounded" loader={({src}) => src} src={blog.image.url} alt={blog.title} width={800} height={500} layout="responsive" 
           />

        <Moment format="YYYY/MM/DD">
        <p >{blog.publishedAt}</p>
        </Moment>
        <h1 className="text-2xl md:text-3xl py-5 font-semibold">{blog.title}</h1>
        <h3>{blog.description}</h3>
        <div className="pt-8 pb-7 md:flex justify-end">
                {blog.tags.map((tag) => (
                    <div className="badge badge-accent ml-2" key={tag} >{tag}</div> 
                   
                ))}
        </div>

        {blog.toc_visible && (
           <div className="py-5 text-center " >
          <p className="pb-3 font-bold text-xl">目次</p>
          <ul>
            {toc.map(data => (
              <li key={data.id} className="text-lg py-1 link link-hover text-primary-content">
                <a href={`#${data.id}`}>
                  {data.text}
                </a>
              </li>
            ))}
          </ul>
          </div>
        )}


        <div 
        dangerouslySetInnerHTML={{
          __html:`${blog.body}`,
        }} 
        />

        
  
        </div>
        </>
    );
}

export default BlogItem;