import React from 'react';
import './Project.css'
import pharmaeasyClone from '../../assets/pharmaeasyClone.png'
import netflixClone from '../../assets/netflixClone.png'
import viratResume from '../../assets/viratResume.png'
const Project = () => {
  return (
    <div id='project' className='projects'>
      <div className="project-title">
        <h1> My Projects</h1>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <div className="project-image"><img src={pharmaeasyClone} alt="" />
          </div>
          <div className="about-project">
           <p> Pharmaeasy Clone </p>
           <p>language used HTML & CSS</p>
           <p>Live link: <a href="https://admirable-gnome-dd3797.netlify.app/" target='_blank'>Click Here to view!</a></p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"><img src={netflixClone} alt="" />
          </div>
          <div className="about-project">
           <p> Netflix Clone </p>
           <p>language used HTML & CSS</p>
           <p>Live link: <a href="https://66a49fdd0aed3bd69486f511--legendary-paletas-8bfa34.netlify.app/" target='_blank'>Click Here to view!</a></p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image"><img src={viratResume} alt="" />
          </div>
          <div className="about-project">
           <p> Virat Kohli Resume </p>
           <p>language used HTML & CSS</p>
           <p>Live link: <a href="https://lustrous-centaur-2916e8.netlify.app/" target='_blank'>Click Here to view!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
