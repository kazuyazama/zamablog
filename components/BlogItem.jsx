import Image from "next/image";
import Moment from "react-moment";

const BlogItem = ({blog}) => {

    return (
        <div>
        {/* <img loader={({src}) => src} src={`${blog.image.url}?fm=webp`} alt={blog.title} className="py-5" /> */}
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

        <div 
        dangerouslySetInnerHTML={{
          __html:blog.body.map((item, i) => 
            item.fieldId === 'richEditor' ? (
             `${item.richEditor}`
            ) : item.fieldId === 'html' ? (
              `${item.html}` 
            ) : null )
        }} />

        
        
  
        </div>
    );
}

export default BlogItem;