import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
const twitter = <FontAwesomeIcon icon={faTwitter} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const facebook = <FontAwesomeIcon icon={faFacebook} />
const github = <FontAwesomeIcon icon={faGithub} />

function Footer () {
    return (
        <div className="footer">
            <h4> {twitter}</h4>
            <h4> {linkedin}</h4>
            <h4> {facebook}</h4>
            <h4> {github}</h4>
        </div>
    )
}

export default Footer