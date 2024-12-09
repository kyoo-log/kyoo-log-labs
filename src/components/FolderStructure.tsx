import React from 'react';

interface FolderStructureProps {
  type: 'project' | 'article';
}

const FolderStructure = ({ type }: FolderStructureProps) => {
  return (
    <div className="mt-4 p-4 bg-opacity-10 bg-white rounded-lg border border-glitch-pink border-opacity-20">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2 text-glitch-pink font-monaspace">
          <span className="text-sm">📁 root</span>
          <div className="flex-1 h-px bg-glitch-pink opacity-20"></div>
        </div>
        
        {type === 'project' ? (
          <>
            <div className="ml-4 flex items-center space-x-2">
              <span className="text-sm">└── 📁 projects</span>
            </div>
            <div className="ml-8 flex items-center space-x-2 opacity-70">
              <span className="text-sm">├── kyoo-labs</span>
            </div>
            <div className="ml-8 flex items-center space-x-2 opacity-70">
              <span className="text-sm">└── data-viz</span>
            </div>
          </>
        ) : (
          <>
            <div className="ml-4 flex items-center space-x-2">
              <span className="text-sm">└── 📁 articles</span>
            </div>
            <div className="ml-8 flex items-center space-x-2 opacity-70">
              <span className="text-sm">├── data-science</span>
            </div>
            <div className="ml-8 flex items-center space-x-2 opacity-70">
              <span className="text-sm">└── design-patterns</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FolderStructure;