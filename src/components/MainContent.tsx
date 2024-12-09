import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FolderStructure from './FolderStructure';

const MainContent = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleItemClick = (url: string, item: string) => {
    setClickedItem(item);
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto mt-16 px-4">
      <div className="space-y-12">
        {/* My Project Section */}
        <div className="space-y-4">
          <div 
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredItem('project')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick('https://github.com/kyoo-log', 'project')}
          >
            <h2 className="text-3xl font-monaspace text-glitch-pink hover:animate-glitch transition-all duration-300 flex items-center">
              <span className="inline-block mr-2">📁</span>
              My Project
              {(hoveredItem === 'project' || clickedItem === 'project') && (
                <Plus className="inline-block ml-2 animate-fade-in" size={24} />
              )}
            </h2>
            <div className="h-0.5 w-0 group-hover:w-full bg-glitch-pink transition-all duration-300" />
          </div>
          <FolderStructure type="project" />
        </div>

        {/* My Article Section */}
        <div className="space-y-4">
          <div 
            className="group relative cursor-pointer"
            onMouseEnter={() => setHoveredItem('article')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick('https://medium.com/@movahmi', 'article')}
          >
            <h2 className="text-3xl font-monaspace text-glitch-pink hover:animate-glitch transition-all duration-300 flex items-center">
              <span className="inline-block mr-2">📁</span>
              My Article
              {(hoveredItem === 'article' || clickedItem === 'article') && (
                <Plus className="inline-block ml-2 animate-fade-in" size={24} />
              )}
            </h2>
            <div className="h-0.5 w-0 group-hover:w-full bg-glitch-pink transition-all duration-300" />
          </div>
          <FolderStructure type="article" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;