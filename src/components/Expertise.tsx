import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faApple,faAndroid,faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Firebase",
    "Provider",
    "Bloc",
    "Flutter Secure Storage",
    "Google Maps API",
    "SQL",
    "PostgreSQL",
];

const labelsSecond = [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Python",
    "CUDA",
    "OpenCV",
    "Hugging Face Transformers",
    "JAX",
    "PyTorch Lightning",
    "Weights & Biases",
    "TensorBoard",
    "ONNX",
    "OpenAI API",
    "LangChain",
    "Jupyter Notebook"
];



function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
 <FontAwesomeIcon icon={faApple} size="3x"/>
 <div style={{ width: '2px', height: '48px', backgroundColor: '#ccc' }}></div>
 <FontAwesomeIcon icon={faAndroid} size="3x"/>
</div>
                    <h3>Flutter Mobile Development</h3>
<p>I develop cross-platform mobile applications using Flutter and Dart, creating seamless user experiences for both iOS and Android. I have expertise in state management, API integration, local storage, and implementing complex UI/UX designs with native performance.</p>                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & Deep Learning</h3>
<p>I design and implement intelligent systems using TensorFlow, PyTorch, and modern AI frameworks. My experience spans computer vision, natural language processing, and predictive modeling, from data preprocessing to model deployment in production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;