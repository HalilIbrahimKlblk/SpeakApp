import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // <-- düzeltildi
import { faLinkedin, faSquareInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Team = ({ img, name, duty, mail, linkedln, github, instagram }) => {
    return (
        <div className="team-member">
            <img src={`${img}`} alt={name} />
            <h3>{name}</h3>
            <p>{duty}</p>
            <div className='logo-flex'>
                <a href={`mailto:${mail}`}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className='icons'/>
                </a>
                <a href={`https://www.linkedin.com/in/${linkedln}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='icons'/>
                </a>
                <a href={`https://www.github.com/${github}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className='icons'/>
                </a>
                <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareInstagram} size="2x" className='icons'/>
                </a>
            </div>
        </div>
    );
};

export default Team;
