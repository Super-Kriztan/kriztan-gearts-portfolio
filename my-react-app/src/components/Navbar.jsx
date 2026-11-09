
export default function Navbar({ page, setPage }) {
  const links = [
    ["home", "01 / JOURNEY"],
    ["exploration", "02 / EXPLORATION"],
    ["reflection", "03 / REFLECTION"],
    ["appendices", "04 / APPENDICES"]
  ];

  return (
    <header className="navbar">
      <button
        className="brand"
        onClick={() => setPage("home")}
      >
        FORMS<span>OF</span>ME.
      </button>

      <nav>
        {links.map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "nav-link active" : "nav-link"}
            onClick={() => {
              setPage(id);
              window.scrollTo(0, 0);
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <span className="nav-caption">
        ART APPRECIATION · 2026
      </span>
    </header>
  );
}
