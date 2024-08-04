import React, { useState } from "react";
import '../App.css';

export default function Skill() {
  const [filter, setFilter] = useState('All');

  const skill = [
    { name: "HTML", type: "frontend", photo: "/html.png" },
    { name: "CSS", type: "frontend", photo: "/css.png" },
    { name: "Bootstrap", type: "frontend", photo: "/bootstrap.png" },
    { name: "Tailwind", type: "frontend", photo: "/tailwind.png" },
    { name: "Javascript", photo: "/javascript.png" },
    { name: "Typescript", photo: "/typescript.png" },
    { name: "React", type: "frontend", photo: "/react.png" },
    { name: "Next", type: "frontend", photo: "/next.png" },
    { name: "Node", type: "backend", photo: "/node.png" },
    { name: "Express", type: "backend", photo: "/express.png" },
    { name: "Mongo", type: "database", photo: "mongo.png" },
    { name: "Git", type: "tool", photo: "/social.png" },
    { name: "Github", type: "tool", photo: "/github.png" },
    { name: "Postman", type: "tool", photo: "/postman.png" },
    { name: "Jira", type: "tool", photo: "/jira.png" }
  ];

  const titles = ['All', 'Frontend', 'Backend', 'Database', 'Tool'];

  const filteredSkills = skill.filter(item => filter === 'All' || item.type === filter.toLowerCase());

  return (
    <>
      <div>
        <h2 className="skill-heading">Technical Skills</h2>
      </div>

      <div className="skill-button-container">
        {titles.map((item, index) => (
          <Button 
            key={index} 
            name={item} 
            onClick={() => setFilter(item)} 
            active={filter === item}
          />
        ))}
      </div>

      <div className="skill-content">
        {filteredSkills.map((item, index) => (
          <Icon key={index} img={item.photo} name={item.name} />
        ))}
      </div>
    </>
  );
}

const Button = ({ name, onClick, active }) => {
  return (
    <button 
      className={`skill-button ${active ? 'active' : ''}`} 
      onClick={onClick}
    >
      {name}
    </button>
  );
}

const Icon = ({ img, name }) => {
  return (
    <div className="icon">
        <div className="icon-container">
      <div className="icon-image">
        <img src={img} alt={name} />
      </div>
      <p className="icon-name">{name}</p>
    </div>
    </div>
  );
}
