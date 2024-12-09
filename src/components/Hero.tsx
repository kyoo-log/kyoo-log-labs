import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="absolute inset-0 bg-glitch-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tree-bg.png')] opacity-10 bg-repeat"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <pre className="text-xs sm:text-sm md:text-base lg:text-lg font-mono whitespace-pre overflow-x-auto animate-glitch text-glitch-pink">
{`
 _  __                 _                    
| |/ /   _ ___   ___ | | ____ _ _ __ _   _ 
| ' / | | / __| / _ \\| |/ / _\` | '__| | | |
| . \\ |_| \\__ \\| (_) |   < (_| | |  | |_| |
|_|\\_\\__, |___/ \\___/|_|\\_\\__,_|_|   \\__,_|
     |___/                                  
`}
        </pre>
        
        <div className="space-y-4">
          <TypewriterEffect text="Unveil hidden patterns in vast datasets" />
          <p className="text-lg sm:text-xl opacity-75 animate-fadeIn">
            Exploring the intersection of data and design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;