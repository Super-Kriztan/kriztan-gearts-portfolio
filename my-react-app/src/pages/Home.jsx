
const artworks = [
  {
    title: "The Meme",
    category: "DIGITAL ART",
    image: "/artworks/journey/meme.jpg"
  },
  {
    title: "AI Art",
    category: "DIGITAL CREATION",
    image: "/artworks/journey/ai-art.jpg"
  },
  {
    title: "Visual Story",
    category: "VIDEO",
    image: "/artworks/journey/visual-story.mp4",
    video: true
  },
  {
    title: "Painting",
    category: "TRADITIONAL ART",
    image: "/artworks/journey/painting.jpg"
  },
  {
    title: "Living Art",
    category: "NATURE ASSEMBLAGE",
    image: "/artworks/journey/living-art.jpg"
  }
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">
            MY ART APPRECIATION JOURNEY
          </span>

          <h1>
            A collection
            <br />
            of <em>what I create.</em>
          </h1>

          <p>
            An exploration of creativity, expression,
            and the experiences that shaped my
            understanding of art.
          </p>

          <a href="#gallery" className="explore-link">
            EXPLORE MY WORK ↓
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/artworks/journey/painting.jpg"
            alt="Featured artwork"
          />
          <span>FEATURED ARTWORK — 001</span>
        </div>
      </section>

      {/* ALBUM INSPIRED SECTION */}
      <section className="album-banner">
        <div className="album-cover">
          <img
            src="/artworks/album-covers/whole-lotta-red.jpg"
            alt="Whole Lotta Red"
          />
        </div>

        <div className="album-copy">
          <span className="eyebrow">
            VISUAL INSPIRATION / 001
          </span>

          <h2>
            WHOLE LOTTA <span>CREATIVITY.</span>
          </h2>

          <p>
            "I want my impact to be Legendary".
          </p>

          <strong>
             PLAYBOI CARTI × THE WEEKND INSPIRED
          </strong>

          <div className="artist-logos">
            <img
              src="/artworks/album-covers/carti-logo.png"
              alt="Playboi Carti logo"
            />

            <img
              src="/artworks/album-covers/weeknd-logo.png"
              alt="The Weeknd logo"
            />
          </div>
        </div>
      </section>

      {/* PART I ARTWORK GALLERY */}
      <section className="gallery" id="gallery">
        <div className="section-title">
          <div>
            <span className="eyebrow">
              PART I / THE COLLECTION
            </span>

            <h2>
              My course <em>outputs.</em>
            </h2>
          </div>

          <p>
            Five activities. Different forms of expression.
            One creative journey.
          </p>
        </div>

        <div className="art-grid">
          {artworks.map((art, index) => (
            <article className="art-card" key={art.title}>
              <div className="art-image">

                {art.video ? (
                  <video
                    src={art.image}
                    controls
                    playsInline
                  />
                ) : (
                  <img
                    src={art.image}
                    alt={art.title}
                    className="click-to-fullscreen"
                    onClick={(e) => {
                      e.currentTarget.requestFullscreen();
                    }}
                  />
                )}

                <span>0{index + 1}</span>
              </div>

              <div className="art-info">
                <h3>{art.title}</h3>
                <small>{art.category}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
