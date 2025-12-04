function ProjectCard({ src, type, link, h3, h3Link, p, pLink }) {
  return (
    <div className="projectCard">
      {/* Video or Image */}
      {type === "video" ? (
        <video src={src} controls width="100%" />
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="hover" src={src} alt={`${h3} logo`} />
        </a>
      )}

      {/* Headline */}
      {h3Link ? (
        <h3>
          <a href={h3Link} target="_blank" rel="noopener noreferrer">
            {h3}
          </a>
        </h3>
      ) : (
        <h3>{h3}</h3>
      )}

      {/* Paragraph with optional link */}
      {pLink ? (
        <p>
          <a href={pLink} target="_blank" rel="noopener noreferrer">
            {p}
          </a>
        </p>
      ) : (
        <p>{p}</p>
      )}
    </div>
  );
}

export default ProjectCard;
