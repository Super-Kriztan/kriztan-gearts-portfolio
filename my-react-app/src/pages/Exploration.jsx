
const folders = [
  {
    title: "Dance",
    description: "Movement, rhythm & expression",
    image: "/artworks/exploration/dance-cover.jpg"
  },
  {
    title: "Tie-Dye",
    description: "Colors, patterns & experimentation",
    image: "/artworks/exploration/tiedye.jpg"
  },
  {
    title: "Graphic Design",
    description: "A new creative experience",
    image: "/artworks/exploration/third-art.jpg"
  }
];

export default function Exploration() {
  return (
    <>
      <section className="exploration-hero">
        <span className="eyebrow">
          PART II / MY ARTISTIC EXPLORATION
        </span>

        <h1>
          Outside my
          <br />
          <em>usual frame.</em>
        </h1>

        <p>
          Exploring unfamiliar art forms and
          discovering new ways to express myself.
        </p>
      </section>

      <section className="gallery">
        <div className="section-title">
          <h2>My creative <em>folders.</em></h2>
          <span>OPEN A COLLECTION ↗</span>
        </div>

        <div className="folder-grid">
          {folders.map((folder, index) => (
            <article className="folder-card" key={folder.title}>
              <div className="folder-image">
                <img
                  src={folder.image}
                  alt={folder.title}
                />
                <span>0{index + 1}</span>
              </div>

              <h3>{folder.title}</h3>
              <p>{folder.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
