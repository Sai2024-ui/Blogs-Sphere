import "../styles/pages.css";
export default function SearchBar({value, onChange}) 
{
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search posts by title…"
        value={value} onChange={onChange}
      />
      <button onClick={() => onChange({ target: { value: "" }})} className="search-bar__clear" >x</button>
    </div>
  );
}