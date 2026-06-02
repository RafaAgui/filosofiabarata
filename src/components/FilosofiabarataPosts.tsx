import { useState } from "react";
import { parseCategories, categoryToSlug } from "../utils/categories";

interface Post {
  slug: string;
  title: string;
  date: string;
  categorias: string;
  description: string;
}

interface Props {
  posts: Post[];
  initialCount?: number;
  loadMoreCount?: number;
}

export default function FilosofiabarataPosts({ posts, initialCount = 13, loadMoreCount = 24 }: Props) {
  const [visible, setVisible] = useState(initialCount);

  const visiblePosts = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <>
      <ul className="posts">
        {visiblePosts.map((post) => (
          <li key={post.slug} className="posts__item">
            <a className="posts__title-link" href={`/blog/${post.slug}`}>
              <h2 className="posts__title">{post.title}</h2>
            </a>
            <p className="posts__description">{post.description}</p>
            <p className="posts__date">{post.date}</p>
            <div className="posts__categories">
              {parseCategories(post.categorias).map((cat) => (
                <a
                  key={cat}
                  className="posts__category"
                  href={`/categorias/${categoryToSlug(cat)}`}
                >
                  {cat}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button className="posts__load-more" onClick={() => setVisible((v) => v + loadMoreCount)}>
          Ver más
        </button>
      )}
    </>
  );
}