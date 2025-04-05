import React from "react";
import './body.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';


const services = [
  {

    image:img1,
    title: "SQL Automation Agent",
    tagline: " Convert Prompts into SQL Actions",
    UseCase: "Natural language-driven updates and queries for databases",
    description:
      " Prompt-to-SQL conversion Live preview and safety validation  Support for multiple SQL dialects",
      
    },
  {
    image:img2,
    title: "Resume Filtering Agent",
    tagline: " Find the Right Talent in Seconds",
    UseCase: "Streamlined hiring by matching resumes with job criteria.",
    description:
      "Resume parsing and skill extraction  AI-based candidate ranking ATS integration-ready",
  },
  {
    image:img3,
    title: "Customer Support Agent",
    tagline: " Your 24/7 Virtual Assistant",
    UseCase: "AI-powered support across chat, email, and social media",
    description:
      " Instant response and issue resolution  Sentiment analysis Human escalation support" },
  {
    image:img4,
    title: "Voice-Enabled Patient Tracking Agent",
    tagline: "  Voice-Activated Clinical Intelligence",
    UseCase: "Real-time patient tracking via voice commands",
    description:
      "  Voice-based status updates Sync with hospital records  Visual dashboard for monitoring",
  },
  {
    image:img5,
    title: "Hospital Management Agent",
    tagline: " Streamlined Healthcare Operations",
    UseCase: " Centralized control over appointments, staff, and resources.",
    description:
      "Appointment booking and reminders Bed and staff allocation   Real-time analytics",
  },
  {
    image:img6,
    title: "Legal Document Analyzer Agent",
    tagline: " AI That Understands Legal Language",
    UseCase: " Review and analysis of contracts and agreements",
    description:
      "Clause and deadline extraction Risk flagging and suggestions  Summary and compliance check",
  },
  {
    image:img7,
    title: "Lead Generation Agent",
    tagline: "  Convert Clicks Into Clients",
    UseCase: "Capture and qualify leads from web and social sources.",
    description:
      "Smart scraping from LinkedIn and directories Lead scoring and filtering CRM integration",
      
    },
 {
  image:img8,
            title: "Logistics & Supply Chain Agent",
            tagline: " Smart Logistics, Real-Time Decisions",
            UseCase: "Optimize transport, inventory, and delivery workflows.",
            description:
            " Route optimization and ETA prediction Inventory monitoring Forecasting and alerts",
            
            },
        {
          image:img9,
            title: "LinkedIn Content Creation Agent",
            tagline: "  Supercharge Your Personal Brand",
            UseCase: " Personalized LinkedIn content for professionals.",
            description:
              "Trend-based content generation Tone/style customization Scheduling and engagement tracking",
              
            },
            {
              image:img10,
                title: "Travel Planner Agent",
                tagline: " Plan Smart, Travel Smarter",
                UseCase: "AI-powered travel planning for individuals and businesses.",
                description:
                  "Personalized itinerary generation Real-time flight and hotel suggestions Budget and preference-based recommendations",
                  
                },
                {
                  image:img11,
                    title: "Email Automation Agent",
                    tagline: " Smarter Emails, Better Engagement",
                    UseCase: "Automates personalized email campaigns and follow-ups.",
                    description:
                      "Auto-generate emails based on recipient behavior Schedule and optimize send times Track opens, clicks, and responses with insights",
                      
                    },
];





const AIServiceCards = () => {
  return (
    <div className="containers" id="AI"> 
       <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#2c3e50', 
          marginBottom: '1rem' 
        }}>
          Artificial Intelligence / Machine Learning
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555', 
          maxWidth: '800px', 
          margin: '0 auto', 
          lineHeight: '1.6' 
        }}>
          Explore a range of intelligent agents powered by AI/ML, designed to automate, optimize, and enhance your business operations across various industries.
        </p>
      </div>

    <div className="grid-containers" >
      {services.map((service, index) => (
        <div key={index} className="service-cards">
           <img src={service.image} alt={service.title} className="service-images"/>
          <h1 className="service-titles">{service.title}</h1>
          <p className="service-taglines">{service.tagline}</p>
          <p className="service-usecases">{service.UseCase}</p>
          <p className="service-descriptions">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default AIServiceCards;
