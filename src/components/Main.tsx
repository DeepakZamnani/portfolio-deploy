import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Main.scss';
import myImage from '../assets/images/me.jpeg';
import Plasma from "./GradientBlinds";
function Main() {
  return (
    <div className="container">
      {/* Plasma Background */}
      <Plasma
        color="#667eea" // Purple color - change this to match your brand
        speed={0.8}
        direction="forward"
        scale={1}
        opacity={0.6}
        mouseInteractive={true}
      />
      
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DeepakZamnani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/deepak-zamnani-9958972a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://twitter.com/DeepakZamnani" target="_blank" rel="noreferrer"><TwitterIcon/></a>
          </div>
          <h1>Deepak Zamnani</h1>
          <p>Developer and ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/DeepakZamnani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/deepak-zamnani-9958972a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://twitter.com/DeepakZamnani" target="_blank" rel="noreferrer"><TwitterIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;