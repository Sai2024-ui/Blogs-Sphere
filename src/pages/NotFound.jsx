import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function NotFound() {
  return (
    <section className="page page--centered">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">Oops — this page doesn't exist.</p>
      <Link to="/" className="not-found__link">
        - Back to Home
      </Link>
    </section>
  );
}