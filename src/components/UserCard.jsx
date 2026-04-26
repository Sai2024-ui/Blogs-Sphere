import "../styles/usercard.css";

// TODO: Accept and destructure: name, email, company, website
export default function UserCard({ name, email, company, website }) {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {name ? name.charAt(0) : "U"}
      </div>
      <div className="user-card__info">
        <h2 className="user-card__name">{ name }</h2>
        <p className="user-card__email">{ email }</p>
        <p className="user-card__company">{company?.name || "No company"}</p>
        <a
          className="user-card__website"
          href={`https://${website }`}
          target="_blank"
          rel="noreferrer"
        >
          {website}
        </a>
      </div>
    </div>
  );
}