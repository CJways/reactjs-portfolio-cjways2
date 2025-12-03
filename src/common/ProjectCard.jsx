function ProjectCard({ src, type, link, h3, p }) {
  return (
    <div className="projectCard">
      {type === "video" ? (
        <video src={src} controls width="100%" />
      ) : (
        <a href={link} target="_blank">
            <img className="hover" src={src} alt={`${h3} logo`} />
        </a>    
      )}
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
