import React from 'react';

const PageLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;