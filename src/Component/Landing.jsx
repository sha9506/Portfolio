import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Skill from './Assets/skills.png';
import Gojo from './Assets/gojo.png';
import Insmarts from './Assets/insmarts.png';
import Github from './Assets/github.png';
import Insta from './Assets/instaa.png';
import Twt from './Assets/twt.png';
import Linkd from './Assets/link.png';

const Landing=()=>
{


    return(<div>
        <div className="nav-bar">
            <div className="nav-name">
                <div className="name-first">SABNAM</div>
                <div className="name-last">H A Z A R I</div>
            </div>
            <AnchorLink href="#art"><button className="nav-bar-item" >Art</button></AnchorLink>
            <AnchorLink href="#skills"><button className="nav-bar-item">Skills</button></AnchorLink>
            <AnchorLink href="#project"><button className="nav-bar-item">Projects</button></AnchorLink>
            <AnchorLink href="#contact"> <button className="nav-bar-item" >Contact</button></AnchorLink>
        </div>
        <div className="name">Sabnam Begum Hazari</div>
        <div className="bio">I do Code & Art</div>
        <div className="intro">Passionate Software <br /> 
        Engineer with a focus on <br />
         React Native development, <br />
            dedicated to crafting <br /> web applications.
        </div>
            <div className="social-item">
            <button className="socials"> <a href="https://github.com/sha9506">GitHub</a></button>
            <button className="socials"><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">LinkedIn</a></button>
            </div>
        
        {/* Skills  */}
        <div className="skills" id="skills">
            <div className="title-head">SKILLS</div>
            <div className="title-info">Why hire me for your next project?</div>
            <div className="skill-image"><img src={Skill} alt="skills" /></div>
        </div>

        {/* Projects  */}
        <div className="projects" id="project">
            <div className="title-head">PROJECTS</div>
            <div className= "title-info">My Latest Project Works</div>
            <img className="project-img" src={Gojo} alt="gojo" />
            <img  className="project-img" src={Insmarts} alt="insmarts" />
        </div>

        {/* art  */}
        <div className="art" id="art">
            <div className="title-head"> Click below to check out my Artworks</div>
            <button className="art-button"><a className="art-hook" href="https://drive.google.com/drive/folders/1iTIsJGZxl61hLRZ1ZZ8qoBpMeSjOKVXl?usp=sharing"> Let's find out</a></button>
            <div className="artwork"></div>
=        </div>
        
        {/* contact  */}
        <div className="contact" id="contact">
            <div className="title-head">Let's Dicuss</div>
            <div className="title-info">Let’s make something new, different and more meaningful or make <br /> things more visual or conceptual</div>
            <div className="email">Email :  sabnamhazari@gmail.com</div>
            <div className="icons">
                <a href="https://github.com/sha9506"><img className="icon-item" src={Github} alt="" /></a>
                <a href="https://www.instagram.com/afsaanaaa_/"><img className="icon-item" src={Insta} alt="" /></a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img className="icon-item" src={Linkd} alt="" /></a>
               <a href="https://twitter.com/afzxnz?t=0OMt5zz2PswQ08G8I3YWEg&s=08"> <img className="icon-item" src={Twt} alt="" /></a>
            </div>
        </div>

        {/* footer  */}
        <div>
            <div className="footer">Loosely designed in  Figma and coded in Visual Studio Code by yours truly. <br />
             Built with React.js and  CSS, deployed with Vercel.</div>
        </div>
    </div>)
}
export default Landing