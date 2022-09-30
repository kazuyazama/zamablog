import Link from "next/link";

const BlogIndex = ({blog}) => {
    return (
        <div className="gap-8 columns-3">
          {blog.map((blog) => (
          <div className="card bg-base-100 shadow-xl hover:-translate-y-3 transition delay-100">
              <Link href={`/blog/${blog.id}`} >
                  <a><img src={blog.image.url} alt={blog.title} width="400px" height="300px"/></a>
              </Link> 
          <ul>
              <li key={blog.id} className="card-body">
              <Link href={`/blog/${blog.id}`}>
                  <a className="card-title">{blog.title}</a>
              </Link>
              <p>{blog.description}</p>
              <div className="card-actions justify-end pt-2">
                {blog.tags.map((tag) => (
                    <div className="badge badge-outline">{tag}</div> 
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