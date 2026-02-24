import React from 'react';
// 분리한 컴포넌트들을 불러옵니다
import MoreWork from './components/MoreWork';
import About from './components/About';
import Contact from './components/Contact';
import AboutSidePeek from './components/AboutSidePeek';
import WorkSidePeek from './components/WorkSidePeek';

function App() {
  return (
    <div className="select-none min-h-screen bg-white text-black font-sans flex flex-col items-center overflow-x-hidden">
      
      {/* --- 1. 상단 여백 (Header) --- */}
      <header className="h-10 md:h-20 w-full"></header>

      {/* --- 2. WORK SECTION --- */}
      <section id="work" className="w-full flex flex-col items-center">
        
        {/* 2.1 히어로 영역: 위치 + 이메일 + 메인 타이틀 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 space-y-1">
            <p className="font-display text-[22px] font-semibold tracking-[0.1em] uppercase text-[#363636]">
              Seoul, South Korea
            </p>
            <p className="font-pretendard text-[18px] font-medium tracking-[0.1em] text-[#d2d2d2]">
              zini.works.lab@gmail.com
            </p>
          </div>

          <h1 className="font-display text-[60px] font-[900] text-[#363636] leading-none tracking-tighter uppercase">
            YUJIN PARK
          </h1>

          <h2 className="flex flex-col items-center justify-center mb-32">
            <span className="font-display text-[60px] font-[900] text-[#d2d2d2] uppercase leading-[0.85]">LANDSCAPE,</span>
            <span className="font-display text-[60px] font-[900] text-[#d2d2d2] uppercase leading-[0.85]">DESIGNER</span>
          </h2>
        </div>
      </section>

      {/* 헤더와 리스트가 통합된 컴포넌트 호출 */}
      <MoreWork />

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