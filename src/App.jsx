import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10">
        <Layout>
          <div className="max-w-7xl mx-auto pt-20 px-6">
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
