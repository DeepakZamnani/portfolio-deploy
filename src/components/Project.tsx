import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import kaamsaathi from '../assets/images/kaamsaathi.png';
import chat from '../assets/images/ZyncChat.png';
import cabapp from '../assets/images/CabApp.png';
import campusmanagement from '../assets/images/CampusManagement.png';
import ocularAI from '../assets/images/OcularAI.png';
import mock10 from '../assets/images/mock10.png';
import classAtendance from '../assets/images/classattendance.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
        <img src={classAtendance} className="zoom" alt="thumbnail" width="100%"/>
              <h2>CCTV based Attendance System</h2>
                <p>Developed an automated attendance system using facial recognition and CCTV cameras. Built with Python, OpenCV, and DeepFace, it detects faces in real-time and logs attendance with database integration and web dashboard reporting.</p>
            </div>
            <div className="project">
<img src={kaamsaathi} className="zoom" alt="thumbnail" width="100%"/>
                <h2>KaamSaathi</h2>
<p>Built and launched a multilingual mobile application connecting workers and laborers with contract opportunities and employment nationwide.</p>
            </div>
            <div className="project">
                <img src={cabapp} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Whigo Cab Bookings</h2>
<p>Developed  a comprehensive cab booking application as client work, featuring user, admin, and driver profiles with dedicated dashboards. Built with modern frameworks and deployed for seamless ride-hailing services.</p>
            </div>
            <div className="project">
                <img src={chat} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Zync: A modern designed chat application</h2>
<p>This is a modern designed mobile chat application that provides seamless real-time messaging and communication features. I created the entire app from scratch using modern mobile development frameworks.</p>
            </div>
            <div className="project">
               <img src={campusmanagement} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Campus Connect: A student-faculty management system</h2>
                <p>This is a comprehensive campus management mobile application that provides real-time faculty and student tracking along with complete log maintenance. I created the entire app from scratch using modern mobile development frameworks.</p>
            </div>
            <div className="project">
                <img src={ocularAI} className="zoom" alt="thumbnail" width="100%"/>
<h2>Ocular AI</h2>
                <p>Ocular AI: A deep learning-powered mobile application for eye disease detection and diagnosis. Built from scratch using modern AI frameworks and mobile development technologies to provide accessible healthcare screening.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;