import { useState } from "react";
import axios from "axios";
import Link from "next/link"
import { BiSearch } from "react-icons/bi"


export default function SearchForm() {
    const [keyword, setKeyword] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [action,SetAction] = useState(false)

  
    const searchInfos = async () => {
      // 検索APIにリクエストを送信
      const res = await axios.get("/api/search", {
        params: {
          keyword,
        },
      });
      // 検索結果をステート変数にセット
      setBlogs(res.data.contents);

      SetAction(true)
     
    };
  
    return (
      
    <>
    
      <div className="card">
        <div className="flex card-body form-control">
          <h3>ブログ内検索</h3>
        <div className="flex input-group">  
        <input 
          placeholder="キーワードを入力"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="input input-bordered base-100 w-full max-w-xs"
        />   
        <button 
        className="card-actions btn btn-square"
        onClick={searchInfos}
        disabled={!keyword}      
        >
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
        <div className="my-auto">
        <BiSearch size={35} color={'#fff'} />
        </div>
        </button>
        </div>
        </div>  
      </div>

      <div className="flex flex-col items-center" >
        {((blogs.length > 0 && action == true) || (action == false)) ?
          blogs.map((blog, index) => (
            <div
              className="card w-80 bg-base-100 drop-shadow-md my-1 "
              key={index}
            >
              <div className="card-body py-2">

              <Link href={`/blog/${blog.id}`}>
                  <a className="card-title">{blog.title}</a>
              </Link>       
            
              <p>{blog.description}</p>
        

              </div>
                
            </div>

          )): (<p>検索結果はありませんでした</p>)
          }
      </div>
    </>
    
    );
}