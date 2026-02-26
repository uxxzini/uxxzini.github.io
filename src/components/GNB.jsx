import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const GNB = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Archive', path: '/Archive' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[150]">
      {/* 외부 컨테이너 */}
      <div className="flex items-center bg-white/70 backdrop-blur-lg border border-[#f0f0f0] rounded-full p-1 shadow-md">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="relative px-6 py-2.5 text-sm font-medium transition-colors duration-300"
          >
            {({ isActive }) => (
              <>
                {/* 글자 색상 제어 */}
                <span className={`relative z-10 ${isActive ? 'text-[#363636] font-bold' : 'text-[#adadad] hover:text-[#767676]'}`}>
                  {item.name}
                </span>

                {/* 활성화된 버튼 박스 */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#f0f0f0] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default GNB;