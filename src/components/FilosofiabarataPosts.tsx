import { useState } from "react";

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
          <a key={post.slug} className="posts__link" href={`/blog/${post.slug}`}>
            <li className="posts__item">
              <h2 className="posts__title">{post.title}</h2>
              <p className="posts__description">{post.description}</p>
              <p className="posts__date">Fecha: {post.date}</p>
              <p className="posts__categories">Categorias: {post.categorias}</p>
            </li>
          </a>
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
