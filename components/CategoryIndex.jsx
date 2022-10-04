import Link from "next/link";

const CategoryIndex = ({category}) => { 
    return (
        <div className="card">
          <ul className="card-body">
            <div className="card-title bg-primary rounded py-1 mb-2 pl-2">カテゴリー</div>
            {category.map((category) => (
              <li key={category.id} className="border-b-2 pl-2">
                <Link href={`/category/${category.id}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          </div> 
    );
}

export default CategoryIndex;