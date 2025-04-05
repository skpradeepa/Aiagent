import React from "react";
import './body.css';
import "./Header";
import "./Footer";
import "./ProjectInfo";
import "./Exp"; // Replace with actual image path
import Exp from "../Components/Exp";
import ProfileCard from "./ProjectInfo";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';

 // adjust the path as needed



const services2 = [
  {

    image:img1,
    title: "Water and Energy Meter Monitoring (Mobile Application)",
    description:
      " A mobile-based computer vision application to automatically read and log data from water and energy meters, reducing manual entry errors and improving efficiency."      
    },
  {
    image:img2,
    title: "Automated Radius Measurement of Vehicle Parts",
    description:
      "An AI solution that captures and calculates the radius of curved vehicle components using high-precision image analysis, reducing the need for manual tools."  },
  {
    image:img3,
    title: "Fiducial Mark Identification for PCB Board Alignment",
    description:
      " Computer vision system for detecting fiducial marks on PCBs to enable accurate and automated alignment during assembly and inspection processes." },
  {
    image:img4,
    title: "Construction Site Automation",
    description:
      " A comprehensive CV system to automate safety checks, material tracking, equipment usage, and activity logging on construction sites using real-time camera feeds.",
  },
  {
    image:img5,
    title: "Vehicle Number Plate Identification",
    description:
      "A license plate recognition solution to identify and log vehicle number plates from surveillance footage for access control, parking management, and security purposes.",
  },
  {
    image:img6,
    title: ". Person Activity Monitoring",
    description:
      "Real-time human activity detection system to monitor behavior, detect anomalies, and ensure productivity or safety compliance in various environments.",
  },
  {
    image:img7,
    title: ". PPE Monitoring for Worker Safety",
    description:
      "An AI-powered solution to detect if individuals are wearing required Personal Protective Equipment (PPE) like helmets, gloves, vests, and masks at work sites.",
      
    },
 {
  image:img8,
            title: "Fabric Defect Detection",
            description:
            " A defect detection system using AI and image processing to automatically identify issues like holes, stains, or misweaves in fabric during production or inspection.",
            
            },
        {
          image:img9,
            title: "Contactless Human Body Size Measurement",
            description:
              "An AI solution that estimates human body measurements from images or videos without physical contact, useful for fashion, healthcare, and fitness industries.",
              
            },
];
const Computervision = () => {

  return (
    <div className="containers" id="CV"> 
     <div style={{ textAlign: 'center', padding: '1rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#2c3e50', 
          marginBottom: '1rem' 
        }}>
         Computer Vision
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          maxWidth: '800px', 
          margin: '0 auto', 
          lineHeight: '1.6' 
        }}>
           A mobile-based computer vision application to automatically read and log data from water and energy meters, reducing manual entry errors and improving efficiency.
        </p>
      </div>
    <div className="grid-containers" >
      {services2.map((service, index) => (
        <div key={index} className="service-cards">
           <img src={service.image} alt={service.title} className="service-images"/>
          <h1 className="service-titles">{service.title}</h1>
          <p className="service-descriptions">{service.description}</p>
        </div>
      ))} 
    </div>
  </div>
  );
};

export default Computervision;
