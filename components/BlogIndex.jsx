import Image from "next/image";
import Link from "next/link";

const BlogIndex = ({blog}) => {
    return (
        <div className="md:gap-8 md:columns-3">
          {blog.map((blog) => (
          <div key={blog.id} className="card h-auto shadow-xl hover:-translate-y-3 transition delay-100 my-8 md:my-auto pb-2">
              <Link href={`/blog/${blog.id}`} >
                  <a><Image loader={({src}) => src} src={blog.image.url} alt={blog.title} width="350px" height="200px"/></a>
              </Link> 
          <ul>
              <li key={blog.id} className="card-body px-5 py-2">
              <Link href={`/blog/${blog.id}`}>
                  <a className="card-title text-lg">{blog.title}</a>
              </Link>
              <p className="text-sm py-2">{blog.description}</p>
              <div className="card-actions justify-end ">
                {blog.tags.map((tag) => (
                    <div className="badge badge-accent text-xs" key={tag}>{tag}</div> 
                ))}
              </div>
              </li>
          </ul>
          </div>
          ))}
          </div>
    );
}

export default BlogIndex;