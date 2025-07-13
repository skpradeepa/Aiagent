import React, { useEffect } from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';
import services2 from '../data/services2'; // your new service array

const ServiceDetails2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services2[id];
  const location = useLocation();
    const handleBack = () => {
      navigate('/', { state: { scrollToAI: true } });
    };
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!service) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', fontSize: '1.2rem' }}>
        Service not found.
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '90px', paddingLeft: '2rem', paddingRight: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
      <button 
  onClick={handleBack}
  style={{
    background: 'none',
    border: 'none',
    fontSize: '2.5rem',
    cursor: 'pointer',
    marginRight: '1rem',
    color: '#2c3e50',
    lineHeight: '1'
  }}
>
  ←
</button>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', margin: 0 }}>{service.title}</h1>
      </div>
      <video
        width="100%"
        height="auto"
        controls
        style={{ marginTop: '1.5rem', borderRadius: '12px' }}
      >
        <source src={service.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ServiceDetails2;
