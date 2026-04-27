import React from 'react';
import './projects.css';

const ProjectCard = ({ project, onClick }) => {
  const { title, image, description, githubLink } = project;

  return (
    <div
      className="projectCard"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      <img src={image} alt={title} className="projectImage" />
      <h3>{title}</h3>
      <p className="projectDescription">{description}</p>
      <div className="projectButtons" onClick={(e) => e.stopPropagation()}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn">GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
