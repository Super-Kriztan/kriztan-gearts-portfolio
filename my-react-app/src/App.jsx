import { useState, useEffect, useRef } from "react";
import "./App.css";

const journeyWorks = [
  { number: "01", title: "The Meme", type: "Digital Art", image: "/artworks/journey/meme.jpg" },
  { number: "02", title: "AI Art", type: "AI Creation", image: "/artworks/journey/ai-art.jpg" },
  { number: "03", title: "Visual Story", type: "Video", image: "/artworks/journey/visual-story.mp4", video: true },
  { number: "04", title: "Painting", type: "Traditional Art", image: "/artworks/journey/painting.jpg" },
  { number: "05", title: "Living Art", type: "Nature Art", image: "/artworks/journey/living-art.jpg" },
];

const explorationFolders = [
  {
  id: "dance",
  number: "01",
  title: "Dance",
  subtitle: "Movement / Rhythm / Expression",
  image: "/artworks/album-covers/dance-cover.jpg",
  description: "A creative expression through movement, rhythm, and music.",
  files: [
    {
      title: "Family Ties",
      image: "/artworks/exploration/famties.mp4",
      video: true
    },
    {
      title: "Love In This Club",
      image: "/artworks/exploration/club.mp4",
      video: true
    },
    {
      title: "Takedown",
      image: "/artworks/exploration/takedown.mp4",
      video: true
    },
    {
      title: "Distraction",
      image: "/artworks/exploration/distraaction.mp4",
      video: true
    }
  ],
},
  {
  id: "tiedye",
  number: "02",
  title: "Tie-Dye",
  subtitle: "Color / Pattern / Experiment",
  image: "/artworks/album-covers/tie-dye-cover.jpg",
  description: "An exploration of colors, patterns, and wearable art.",
  files: [
    {
      title: "Tie-Dye Artwork",
      image: "/artworks/exploration/tiedye.jpg"
    }
  ],
},
  {
    id: "third",
    number: "03",
    title: "Graphic Design",
    subtitle: "Website / Portfolio / Design",
    image: "/artworks/album-covers/untitled-cover.jpg",
    description: "A space for another creative project.",
    files: [
      { title: "Artwork 03", 
      image: "/artworks/exploration/closess.jpg" 
    }, {title: "Artwork 03", 
      image: "/artworks/exploration/widess.jpg"
    }],
  },
];

function Navbar({ page, setPage }) {
  const links = [
    ["home", "ART ARCHIVE"],
    ["exploration", "EXPLORATION"],
    ["reflection", "REFLECTION"],
    ["appendices", "DOCUMENTATION"],
  ];

  return (
    <nav className="navbar">
      <button className="brand" onClick={() => setPage("home")}>
        <span className="brand-mark">K.</span>
        <span>AFTER HOURS <small>SUMBILLO, KRIZTAN / BSCS-4</small></span>
      </button>

      <div className="nav-links">
        {links.map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "nav-link active" : "nav-link"}
            onClick={() => setPage(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function ArtworkCard({ work }) {
  return (
    <article className="art-card">
      <div className="art-image">
        {work.video ? (
          <video src={work.image} controls />
        ) : (
          <img src={work.image} alt={work.title}
            onError={(e) => e.currentTarget.style.display = "none"} />
        )}
        <span className="art-number">{work.number}</span>
      </div>
      <div className="art-info">
        <div>
          <h3>{work.title}</h3>
          <p>{work.type}</p>
        </div>
        <span className="red-arrow">↗</span>
      </div>
    </article>
  );
}

function Home() {
  return (
    
    <div id="home">
      <section className="hero" id="home">
        <div className="hero-background">
          <img src="/artworks/album-covers/after-hours.jpg" alt="" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">A PERSONAL ART COLLECTION / 2026</p>
          <h1>
            GEARTS+<br />
            <span>PORTFOLIO.</span>
          </h1>
          <p className="hero-description">
            A collection of my creative journey, artistic experiments,
            and expressions through different forms of art.
          </p>
          <a href="#collection" className="hero-button">EXPLORE THE ARCHIVE ↘</a>
        </div>

        <div className="hero-side-label">CREATIVITY AFTER DARK — 001</div>
        <div className="hero-bottom">
          <span>PLAYBOI CARTI / THE WEEKND INSPIRED</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="collection section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PART I — GEARTS ACTIVITIES</p>
            <h2>THE ART <span>COLLECTION.</span></h2>
          </div>
          <p className="section-note">Five pieces. Different forms. One creative journey.</p>
        </div>

        
<div className="art-grid">
  {journeyWorks.map((work) => (
    <ArtworkCard key={work.number} work={work} />
  ))}

  {/* SPECIAL RED ARTWORK */}
  <article className="art-card red-feature-card">
    <div className="art-image">
      <img
        src="/artworks/journey/red.jpg"
        alt="Red artwork"
      />
      <span className="art-number">06</span>
      <span className="red-feature-label">SPECIAL PIECE</span>
    </div>

    <div className="art-info">
      <div>
        <h3>RED.</h3>
      </div>
      <span className="red-arrow">↗</span>
    </div>
  </article>
</div>

      </section>

      <section className="album-banner">
        <div className="album-cover">
          <img src="/artworks/album-covers/whole-lotta-red.jpg" alt="Whole Lotta Red album artwork" />
        </div>
        <div className="album-copy">
          <p className="eyebrow">VISUAL INSPIRATION / 001</p>
          <h2>WHOLE LOTTA <span>CREATIVITY.</span></h2>
          <p>Bold expression, raw energy, and art without boundaries.</p>
          <strong>PLAYBOI CARTI — INSPIRED VISUALS</strong>
        </div>
      </section>
    </div>
  );
}

function Exploration({ onOpenFolder }) {
  return (
    <section className="page-section" id="exploration">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PART II — PERSONAL PROJECTS</p>
          <h2>ARTISTIC <span>EXPLORATION.</span></h2>
        </div>
        <p className="section-note">Select a folder to view its contents.</p>
      </div>

      <div className="folder-grid">
        {explorationFolders.map((folder) => (
          <button className="folder-card" key={folder.id} onClick={() => onOpenFolder(folder)}>
            <div className="folder-image">
              <img src={folder.image} alt={folder.title}
                onError={(e) => e.currentTarget.style.display = "none"} />
              <span>{folder.number}</span>
              <b>OPEN FOLDER ↗</b>
            </div>
            <div className="folder-info">
              <h3>{folder.title}</h3>
              <p>{folder.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function FolderDetail({ folder, onBack }) {
  return (
    <section className="page-section folder-detail-page">
      <button className="back-button" onClick={onBack}>← BACK TO EXPLORATION</button>
      <p className="eyebrow">ARTISTIC EXPLORATION / {folder.number}</p>
      <h2 className="detail-title">{folder.title}<span>.</span></h2>
      <p className="detail-description">{folder.description}</p>

      <div className="detail-grid">
        {folder.files.map((file, index) => (
          <div className="detail-file" key={index}>
            {file.video ? (
              <video src={file.image} controls />
            ) : (
              <img src={file.image} alt={file.title}
                onError={(e) => e.currentTarget.style.display = "none"} />
            )}
            <h3>{file.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reflection() {
  return (
    <section className="reflection-page" id="reflection">
      <p className="eyebrow">PART III — PERSONAL REFLECTION</p>
      <h1>LOOKING FORWARD:<br /><span>WHO AM I BECOMING?</span></h1>
      <div className="reflection-content">
        <p>
          Art has allowed me to explore different ways of expressing myself.
          Through these activities, I learned that creativity is not limited
          to one medium or technique. Every experience gives me an opportunity
          to discover something new, improve my skills, and see the world
          from a different perspective.
        </p>
        <p className="reflection-placeholder">
          My experience exploring art was fun and meaningful because I got to enjoy different activities, both individually and with a group. It gave me the chance to express myself, try new things, and discover areas where I still have room to improve.

One activity I especially enjoyed was dancing. Although I already enjoy dancing, I got to try choreographies that were different from my usual style. One was a difficult choreography, while the other was "Distraction," which is not really the type of dance I usually do. It was a good experience to step outside my comfort zone and try something different.

Tie-dye and graphic design were also memorable because they were both new experiences for me. It was my first time making a tie-dye artwork, and I enjoyed seeing how the colors and patterns turned out. With graphic design, I realized that I still need to improve my skills, especially in arranging elements and choosing colors.

I learned that I don't have to be an expert to enjoy art. I may not be good at everything yet, but I am willing to keep learning and improving. What matters most is that I enjoyed the process, had fun with others, and got to create something of my own.
        </p>
      </div>
      <div className="reflection-stamp">SEEEE<br />YUHHH.</div>
    </section>
  );
}

function Appendices() {
  const [selectedImage, setSelectedImage] = useState(null);

  const docs = [
  {
    title: "Code Documentation",
    file: "/artworks/documentation/codedoc.jpg",
    type: "image"
  },
  {
    title: "Dance Documentation",
    file: "/artworks/documentation/dancedoc.jpg",
    type: "image"
  },
  {
    title: "Graphic Design Documentation",
    file: "/artworks/documentation/graphicdoc.mp4",
    type: "video"
  },
  {
    title: "Tie-Dye Documentation",
    file: "/artworks/documentation/tiedoc.mp4",
    type: "video"
  }
];

  return (
    <section className="page-section" id="appendices">
      <p className="eyebrow">PART IV — PROCESS ARCHIVE</p>
      <h2>BEHIND THE <span>ART.</span></h2>
      <p className="section-note">Documentation of the process behind my Part II artworks.</p>
      <div className="documentation-grid">
  {docs.map((doc, index) => (
    <div className="documentation-card" key={doc.file}>
      <div className="documentation-placeholder">

        {doc.type === "video" ? (
          <video
            src={doc.file}
            controls
            preload="metadata"
          />
        ) : (
          <button
  className="documentation-image-button"
  onClick={() => setSelectedImage(doc.file)}
>
  <img
    src={doc.file}
    alt={doc.title}
  />
  <span className="image-view-label">VIEW ↗</span>
</button>
        )}

      </div>

      <h3>{doc.title}</h3>
    </div>
  ))}
</div>
  {selectedImage && (
  <div
    className="image-lightbox"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="lightbox-close"
      onClick={() => setSelectedImage(null)}
    >
      ✕
    </button>

    <img
      src={selectedImage}
      alt="Full-size documentation"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [openFolder, setOpenFolder] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

function toggleMusic() {
  if (!audioRef.current) return;

  if (isPlaying) {
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.log("Music playback failed:", error);
      });
  }
}
    useEffect(() => {
  if (openFolder) return;

  const sections = ["home", "exploration", "reflection", "appendices"];

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setPage(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1, 0.25, 0.5],
    }
  );

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, [openFolder]);

  function navigate(nextPage) {
  setOpenFolder(null);
  setPage(nextPage);

  setTimeout(() => {
    document.getElementById(nextPage)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 50);
}

function openFolderPage(folder) {
  setOpenFolder(folder);

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}

return (
  <div className="app">
    <Navbar page={page} setPage={navigate} />

  {/* TIMELESS SPECIAL PIECE */}
<audio
  ref={audioRef}
  src="/music/Timeless.mp3"
  loop
/>

<article className="timeless-card">
  <div className="timeless-preview">
    <button
      className="timeless-play"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? "Ⅱ" : "▶"}
    </button>

    <div className="mini-music-info">
      <span>♫</span>
      <p>{isPlaying ? "TIMELESS" : "PLAY MUSIC"}</p>
    </div>
  </div>

  <div className="timeless-expanded">
    <div className="timeless-cover">
      <img src="/music/timeless.jpg" alt="Timeless artwork" />
      <span className="red-feature-label">AFTER HOURS</span>
    </div>

    <div className="timeless-details">
      <div>
        <h3>TIMELESS</h3>
        <p>The Weeknd ft. Playboi Carti</p>
      </div>
      <span className="red-arrow">↗</span>
    </div>
  </div>
</article>

      
<main>
  {openFolder ? (
    <FolderDetail
      folder={openFolder}
      onBack={() => {
        setOpenFolder(null);
        setPage("exploration");

        setTimeout(() => {
          document.getElementById("exploration")?.scrollIntoView({
            behavior: "instant",
            block: "start",
          });
        }, 0);
      }}
    />
  ) : (
    <>
      <Home />
      <Exploration onOpenFolder={openFolderPage} />
      <Reflection />
      <Appendices />
    </>
  )}
</main>


      <footer className="footer">
        <span>AFTER HOURS® — PERSONAL ART ARCHIVE</span>
        <span>MADE WITH CREATIVITY & INTENTION.</span>
      </footer>
    </div>
  );

}
