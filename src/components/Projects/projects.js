import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import weather from '../../assets/weather.png';
import text from '../../assets/text.png';
import coffee from '../../assets/coffee.png';
import travel from '../../assets/travel.png';
import fashion from '../../assets/fashion.png';
import timetable from '../../assets/timetable.png';
import './projects.css';

const PROJECTS_DATA = [
  {
    id: 'timetable',
    title: 'College Timetable Generator',
    image: timetable,
    category: 'Full Stack',
    description: 'An automated scheduling system that creates conflict-free timetables based on faculty availability, subjects, and room allocation. It simplifies academic planning by generating efficient and organized class schedules.',
    technologies: ['REACT', 'NODE', 'MONGODB'],
    githubLink: 'https://github.com/JAYAMUGUNTHA22/timetable',
    liveDemoLink: 'https://timetable-voms.vercel.app/',
  },
  {
    id: 'travel',
    title: 'AI Travel Planner',
    image: travel,
    category: 'Full Stack',
    description: 'An AI-based planner that creates personalized day-wise travel itineraries. It recommends places to visit, stay, and explore based on user preferences.',
    technologies: ['React', 'AI/LLM', 'JavaScript'],
    githubLink: 'https://github.com/Monigasri/travel',
    liveDemoLink: 'https://aitravelplanner-nine.vercel.app',
  },
  {
    id: 'fashion',
    title: 'Fashion AI',
    image: fashion,
    category: 'Frontend',
    description: 'An AI assistant that provides personalized outfit recommendations and styling advice. It enhances the shopping experience through smart fashion suggestions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI'],
    githubLink: 'https://github.com/JAYAMUGUNTHA22/code-her',
    liveDemoLink: '',
  },
  
  {
    id: 'weather',
    title: 'Weather App',
    image: weather,
    category: 'Frontend',
    description: 'A web app that displays live weather data using OpenWeather API. Shows temperature, humidity and conditions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    githubLink: 'https://github.com/JAYAMUGUNTHA22/weather-app',
    liveDemoLink: '',
  },
  {
    id: 'tts',
    title: 'Text-to-Speech Converter',
    image: text,
    category: 'Frontend',
    description: 'A web-based tool that converts typed text into natural-sounding speech. Supports multiple voices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    githubLink: 'https://github.com/JAYAMUGUNTHA22/TEXT-TO-SPEECH',
    liveDemoLink: '',
  },
  {
    id: 'coffee',
    title: 'Coffee Website',
    image: coffee,
    category: 'Frontend',
    description: 'A stylish coffee website featuring menus, customer testimonials, and photos of available items. Includes table reservation and a contact section for easy customer interaction.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/JAYAMUGUNTHA22/Coffee-Website',
    liveDemoLink: '',
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <div className="projectsGrid">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
