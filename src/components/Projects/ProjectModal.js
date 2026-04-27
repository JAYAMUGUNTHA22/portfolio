import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const { title, image, description, category, technologies, githubLink, liveDemoLink } = project;

  return (
    <div className="projectModalBackdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Project details">
      <div className="projectModalBackdropEffects">
        <div className="modalOrb modalOrb1" />
        <div className="modalOrb modalOrb2" />
        <div className="modalOrb modalOrb3" />
        <div className="modalGrid" />
      </div>
      <div className="projectModal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="projectModalClose"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="projectModalImageWrap">
          <img src={image} alt={title} className="projectModalImage" />
        </div>
        <div className="projectModalContent">
          {category && (
            <span className="projectModalCategory">{category}</span>
          )}
          <h3 className="projectModalTitle">{title}</h3>
          <p className="projectModalDescription">{description}</p>
          {technologies && technologies.length > 0 && (
            <>
              <p className="projectModalTechLabel">Technologies Used:</p>
              <div className="projectModalTechTags">
                {technologies.map((tech) => (
                  <span key={tech} className="projectModalTechTag">{tech}</span>
                ))}
              </div>
            </>
          )}
          <div className="projectModalActions">
            {liveDemoLink ? (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectModalBtn projectModalBtnPrimary"
              >
                Live Demo
              </a>
            ) : (
              <span className="projectModalBtn projectModalBtnDisabled" aria-hidden>
                Live Demo — Coming soon
              </span>
            )}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projectModalBtn projectModalBtnSecondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
