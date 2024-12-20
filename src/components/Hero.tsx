import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="absolute inset-0 bg-glitch-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tree-bg.png')] opacity-10 bg-repeat"></div>
      </div>
      
      {/* Tree branch with blossoms in top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/branch-blossom.png')] bg-contain bg-no-repeat opacity-20"></div>
      
      {/* Tree roots at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-48 bg-[url('/tree-roots.png')] bg-contain bg-bottom bg-no-repeat opacity-20"></div>
      
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
          <TypewriterEffect text="アンベール隠されたパターンをデータセットで" />
          <p className="text-lg sm:text-xl opacity-75 animate-fadeIn font-japanese">
            データとデザインの交差点を探る
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;