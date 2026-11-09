const sections = [
  {
    title: "Dance Documentation",
    files: [
      {
        name: "Dance Process",
        src: "/artworks/documentation/dancedoc.jpg",
        type: "image"
      }
    ]
  },
  {
    title: "Tie-Dye Documentation",
    files: [
      {
        name: "Tie-Dye Process",
        src: "/artworks/documentation/tiedoc.mp4",
        type: "video"
      }
    ]
  },
  {
    title: "Graphic Design Documentation",
    files: [
      {
        name: "Graphic Design Process",
        src: "/artworks/documentation/graphicdoc.mp4",
        type: "video"
      },
      {
        name: "Website Coding Documentation",
        src: "/artworks/documentation/codedoc.jpg",
        type: "image"
      }
    ]
  }
];

export default function Appendices() {
  return (
    <section className="appendices">
      <span className="eyebrow">
        APPENDICES / CREATIVE PROCESS
      </span>

      <h1>
        Behind the <em>art.</em>
      </h1>

      <p>
        A collection of photographs and videos documenting
        the process behind my artistic explorations.
      </p>

      {sections.map((section, index) => (
        <div className="documentation" key={section.title}>
          <h2>
            0{index + 1} — {section.title}
          </h2>

          <div className="documentation-grid">
            {section.files.map((file, fileIndex) => (
              <div className="documentation-slot" key={fileIndex}>
                {file.type === "video" ? (
                  <video
                    src={file.src}
                    controls
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={file.src}
                    alt={file.name}
                  />
                )}

                <small>{file.name}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}