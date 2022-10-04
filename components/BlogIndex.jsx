import Image from "next/image";
import Link from "next/link";

const BlogIndex = ({blog}) => {
    return (
        <div className="md:gap-8 md:columns-3">
          {blog.map((blog) => (
          <div key={blog.id} className="card bg-base-100 h-96 shadow-xl hover:-translate-y-3 transition delay-100 my-8 md:my-auto">
              <Link href={`/blog/${blog.id}`} >
                  <a><Image loader={({src}) => src} src={blog.image.url} alt={blog.title} width="400px" height="250px"/></a>
              </Link> 
          <ul>
              <li key={blog.id} className="card-body p-5">
              <Link href={`/blog/${blog.id}`}>
                  <a className="card-title">{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
              <div className="card-actions justify-end pt-2">
                {blog.tags.map((tag) => (
                    <div className="badge badge-accent" key={tag}>{tag}</div> 
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