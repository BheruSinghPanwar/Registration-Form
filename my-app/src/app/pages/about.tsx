import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div style={aboutStyle}>
        <h2>About Us</h2>
        <p>Welcome to My Website! We are passionate about providing quality services and content for our users.</p>
        <p>Our mission is to create an inclusive space for everyone to learn and grow.</p>
      </div>
    </Layout>
  );
};

const aboutStyle: React.CSSProperties = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

export default About;
