import React from 'react';
import './Skill.css'
import html from '../../assets/html.png'
import css_3 from '../../assets/css_3.png'
import js from '../../assets/js.png'
import node_js from '../../assets/node_js.png'
import atom from '../../assets/atom.png'
import database from '../../assets/database.png'


const Skill = () => {
    return (
        <div id='skill' className='skill'>
            <div className="skill-title">
                <h1>Skills</h1>
            </div>
            <div className="skill-cards">
                <div className="skill-card">
                    <img src={html} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}> <hr style={{ width: '70%' }} /></div>
                    <p>Progress in <span> HTML 70%</span></p>
                </div>
                <div className="skill-card">
                    <img src={css_3} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}><hr style={{ width: '70%' }} /></div>
                     <p>Progress in <span> CSS 70%</span></p>
                </div>
                <div className="skill-card">
                    <img src={js} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}> <hr style={{ width: '80%' }} /></div>
                     <p>Progress in <span> JS 80%</span></p>
                </div>
                <div className="skill-card">
                    <img src={atom} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}> <hr style={{ width: '80%' }} /></div>
                    <p>Progress in<span> React 80%</span></p>
                </div>
                <div className="skill-card">
                    <img src={node_js} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}><hr style={{ width: '60%' }} /></div>
                     <p>Progress in <span> Node JS 60%</span></p>
                </div>
                <div className="skill-card">
                    <img src={database} alt="" />
                    <div style={{ width: '100%', border: '1px solid white' }}> <hr style={{ width: '60%' }} /></div>
                     <p>Progress in <span> MongoDB 60%</span></p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
