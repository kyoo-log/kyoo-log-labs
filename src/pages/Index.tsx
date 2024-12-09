import React from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-glitch-dark flex flex-col">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;