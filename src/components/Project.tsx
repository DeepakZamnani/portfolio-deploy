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
import creativeEnterprises from '../assets/images/CreativeEnterprises.png'
import bicycleStore from '../assets/images/BicycleWebsite.png'
import marketa from '../assets/images/Marketa.png'
import DZai from '../assets/images/DZai.png'

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        
        {/* AI & ML Section */}
        <div className="project-section">
            <div className="section-header">
                <h2 className="section-title">AI & Machine Learning</h2>
                <div className="section-line"></div>
            </div>
            <div className="projects-grid">
                <div className="project">
                    <img src={classAtendance} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>CCTV Based Attendance System</h2>
                    <p>Automated attendance tracking for 500+ students using real-time facial recognition. Reduced manual attendance time by 90% with Python, OpenCV, and DeepFace integration.</p>
                </div>
                <div className="project">
                    <img src={DZai} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>DZai - Voice Based Coding Assistant</h2>
                    <p>AI-powered coding assistant that understands natural language and generates production-ready code. Integrated with leading LLMs for intelligent suggestions and real-time problem solving.</p>
                </div>
                <div className="project">
                    <img src={marketa} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Marketa - AI Business CRM Platform</h2>
                    <p>Intelligent marketing automation platform helping local businesses strengthen customer relationships with AI-powered personalized offers and automated engagement systems.</p>
                </div>
                <div className="project">
                    <img src={ocularAI} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Ocular AI - Eye Disease Detection</h2>
                    <p>Deep learning-powered mobile application for accessible eye disease screening and diagnosis. Trained on extensive medical datasets to provide accurate, instant health assessments.</p>
                </div>
            </div>
        </div>

        {/* Mobile Applications Section */}
        <div className="project-section">
            <div className="section-header">
                <h2 className="section-title">Mobile Applications</h2>
                <div className="section-line"></div>
            </div>
            <div className="projects-grid">
                <div className="project">
                    <img src={cabapp} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Whigo - Cab Booking Platform</h2>
                    <p>Enterprise-grade ride-hailing platform with dedicated interfaces for users, drivers, and administrators. Features real-time GPS tracking, automated fare calculation, and payment integration.</p>
                </div>
                <div className="project">
                    <img src={kaamsaathi} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>KaamSaathi - Worker Employment Platform</h2>
                    <p>Multilingual mobile platform connecting 10,000+ workers with contract opportunities nationwide. Features job matching algorithms, secure payments, and real-time communication.</p>
                </div>
                <div className="project">
                    <img src={chat} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Zync - Modern Chat Application</h2>
                    <p>Feature-rich messaging platform with real-time communication, end-to-end encryption, media sharing, and group chat functionality built with modern mobile frameworks.</p>
                </div>
                <div className="project">
                    <img src={campusmanagement} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Campus Connect - Student Management System</h2>
                    <p>Comprehensive campus management solution with real-time faculty tracking, student attendance monitoring, and complete activity logging for streamlined administrative workflows.</p>
                </div>
            </div>
        </div>

        {/* Web Applications Section */}
        <div className="project-section">
            <div className="section-header">
                <h2 className="section-title">Web Applications</h2>
                <div className="section-line"></div>
            </div>
            <div className="projects-grid">
                <div className="project">
                    <img src={creativeEnterprises} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Creative Enterprises</h2>
                    <p>Modern, responsive single-page application featuring dynamic animations, interactive elements, and optimized performance. Designed to showcase services and drive client engagement.</p>
                </div>
                <div className="project">
                    <img src={bicycleStore} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Bicycle Store Website</h2>
                    <p>Eye-catching e-commerce website with vibrant electric green theme, product showcase galleries, and smooth user experience built with React for fast loading times.</p>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Project;