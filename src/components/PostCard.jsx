import { Link } from "react-router-dom";
import "../styles/postcard.css";

// TODO: Add the four props in the destructuring: id, title, body, userId
export default function PostCard({id, title, body, userId })
{
  return (
    <article className="post-card">
      <h2 className="post-card__title">
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>

      <p className="post-card__body">
        {body.slice(0, 100) + "..." }
      </p>

      <footer className="post-card__footer">
        <Link to={`/users/${userId}`}>By User #{userId}</Link>
      </footer>
    </article>
  );
}