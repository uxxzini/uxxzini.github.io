import React from 'react';
import { FiInstagram, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { PiFlowerDuotone, PiArchive } from 'react-icons/pi';

function App() {
  return (
    <div className="select-none min-h-screen bg-white text-black font-sans flex flex-col items-center overflow-x-hidden">
      
      {/* --- 1. 상단 헤더 (비워둠) --- */}
      <header className="h-10 md:h-20 w-full"></header>

      {/* --- 2. WORK SECTION --- */}
      <section id="work" className="w-full flex flex-col items-center">
        
        {/* 2.1 위치 + 이메일 + 메인 타이틀 + 텍스트 */}
        <div className="flex flex-col items-center text-center">
          {/* 위치 & 이메일 (일반 글자로 작성) */}
          <div className="mb-6 space-y-1">
            <p className="font-display text-[22px] font-[700] tracking-[0.1em] uppercase text-[#363636]">
              Seoul, South Korea
            </p>
            <p className="font-pretendard text-[18px] font-[500] tracking-[0.1em] text-[#d2d2d2]">
              gmail.com
            </p>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="font-display text-[60px] font-[900] text-[#363636] leading-none tracking-tighter uppercase">
            YUJIN PARK
          </h1>

          {/* 하단 텍스트 */}
          <h2 className="flex flex-col items-center justify-center mb-32">
            <span className="font-display text-[60px] font-[900] text-[#d2d2d2] uppercase leading-[0.85]">LANDSCAPE,</span>
            <span className="font-display text-[60px] font-[900] text-[#d2d2d2] uppercase leading-[0.85]">DESIGNER</span>
          </h2>
        </div>

        {/* 2.2 MORE WORK */}
        <div className="w-full flex flex-col items-center py-20 bg-gray-50/30">
          <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
            MORE WORK
          </h3>
          <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
            Select recent and notable projects
          </p>
        </div>
      </section>


      {/* --- 3. ABOUT SECTION --- */}
      <section id="about" className="w-full flex flex-col items-center py-32 border-t border-gray-50">
        <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
          ABOUT
        </h3>
      </section>


      {/* --- 4. CONTACT SECTION --- */}
      <section id="contact" className="w-full py-32 border-t border-gray-50">

        <div className="w-full flex flex-col items-center pt-20 pb-8 bg-gray-50/30">
          <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
            CONTACT
          </h3>
          <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
            Let’s plant a seed for our next collaboration
          </p>
        </div>

        {/* 컨테이너 설정: max-w와 mx-auto로 양 끝 여백 확보 */}
        <div className="max-w-[1200px] mx-auto px-8 w-full">

          {/* items-stretch를 통해 양쪽 카드 높이를 동일하게 유지 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            
            {/* 왼쪽: 컨택트 카드 (내용에 따라 높이가 결정됨) */}
            <div className="bg-[#f7f7f7] rounded-[2rem] p-10 flex flex-col">

              {/* 제목 및 간격 설정 (mb-8 = 32px) */}
              <h3 className="font-display text-[24px] font-medium text-[#363636] mb-8 leading-tight">
                Growing Ideas into Reality !
              </h3>

              {/* 내용 작성 */}
              <div className="max-w-[600px]">
                <p className="font-pretendard text-[16px] text-justify leading-snug text-[#767676]">
                  Driven by a relentless spirit and a strategic mindset, I am constantly building my foundation for growth. 
                  I thrive on the synergy of collaboration and remain open to new opportunities at{' '}
                  <span 
                    className="allow-select font-[500] text-[#363636] underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText('yjks1179@gmail.com');
                      alert('Email address copied!');
                    }}
                  >
                    yjks1179@gmail.com
                  </span>
                  {' '}to grow and innovate together.
                </p>
              </div>

              {/* 내용 아래 간격 두고 상태 표시줄 작성 */}
              <div className="flex items-center space-x-3 mt-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-pretendard text-[14px] font-medium text-[#adadad]">
                  Open to conversations
                </span>
              </div>
            </div>

            {/* 6. 오른쪽: Elsewhere (왼쪽 길이에 맞춰 높이가 자동으로 늘어남) */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col">
              {/* 제목 및 간격 */}
              <h3 className="font-display text-[24px] font-medium text-[#363636] mb-8 leading-tight">
                Elsewhere
              </h3>

              {/* 소셜 링크 2*2 배치 */}
              <div className="grid grid-cols-2 gap-x-8">
                {[
                  { name: 'Github', url: 'https://github.com/uxxzini', icon: <FiGithub /> },
                  { name: 'Instagram', url: 'https://www.instagram.com/uuu.zini.eee/', icon: <FiInstagram /> },
                  { name: 'Blog', url: 'https://blog.naver.com/yjin5268', icon: <PiArchive /> },
                  { name: 'Business', url: '#', icon: <PiFlowerDuotone /> },
                ].map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url}
                    target="_blank"  // 새 탭에서 열기 (권장)
                    rel="noopener noreferrer"  // 보안 설정 (권장)
                    className="group flex items-center justify-between py-2.5 border-b border-gray-50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-[20px] text-[#767676] group-hover:text-[#363636] transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span className="font-pretendard text-[18px] text-[#767676] group-hover:text-[#363636] transition-colors duration-300">
                        {link.name}
                      </span>
                    </div>
                    <div className="text-lg text-[#363636] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <FiArrowUpRight />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- 5. FOOTER --- */}
      <footer className="w-full py-12 text-center border-t border-gray-50">
        <p className="font-pretendard text-[14px] font-[500] text-[#d2d2d2] tracking-tighter">
          © Copyright 2026.
        </p>
      </footer>
      
    </div>
  );
}

export default App;