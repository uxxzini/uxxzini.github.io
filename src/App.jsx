import React from 'react';
// 분리한 컴포넌트들을 불러옵니다
import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import AboutSidePeek from './components/AboutSidePeek';
import WorkSidePeek from './components/WorkSidePeek';

function App() {
  return (
    <div className="select-none min-h-screen bg-white text-black font-sans flex flex-col items-center overflow-x-hidden">

      {/* --- 1. HeroSection --- */}
      <HeroSection />

      {/* --- 2. NOREWORK SECTION --- */}


      {/* --- 3. ABOUT SECTION --- */}
      <About />

      {/* --- 4. CONTACT SECTION --- */}
      <Contact />

      {/* --- 5. FOOTER --- */}
      <footer className="w-full py-12 text-center border-t border-gray-50">
        <p className="font-pretendard text-[14px] font-[500] text-[#d2d2d2] tracking-tighter">
          © Copyright 2026.
        </p>
      </footer>

      {/* --- 6. OVERLAYS (Side Peeks) --- */}
      {/* 화면 전체를 덮어야 하므로 가장 아래에 위치합니다 */}
      <AboutSidePeek />
      <WorkSidePeek />
      
    </div>
  );
}

export default App;