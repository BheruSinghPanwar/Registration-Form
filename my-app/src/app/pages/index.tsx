import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page!</h1>
        <p>Explore our website and learn more about what we do.</p>
      </div>
    </Layout>
  );
};

export default Home;
