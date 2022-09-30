
import Moment from "react-moment";

const BlogItem = ({blog}) => {
    return (
        <div>
        <img loader={(src) => src} src={`${blog.image.url}?fm=webp`} alt={blog.title} className="py-5" />
        

        <Moment format="YYYY/MM/DD"  >
        <p >{blog.publishedAt}</p>
        </Moment>
        <h1 className="text-4xl py-3">{blog.title}</h1>
        <h3>{blog.description}</h3>
        <div className="pt-3 pb-7 flex justify-end">
                {blog.tags.map((tag) => (
                    <div className="badge badge-outline ml-2">{tag}</div> 
                ))}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      
        <p>{blog.category && `${blog.category.name}`}</p>
        </div>
    );
}

export default BlogItem;