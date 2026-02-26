import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const HeroSection = () => {
  // 1. 마우스 X, Y 좌표 저장
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. 부드러운 움직임을 위한 Spring 효과
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // 3. 마우스 이동 시 좌표 업데이트
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // 마우스 좌표와 연동된 동적 clip-path 문자열 생성
  const maskClipPath = useMotionTemplate`circle(200px at ${smoothX}px ${smoothY}px)`;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex flex-col items-center justify-center">
      
      {/* --- Layer 1: 기본 배경 (연한 그리드) --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      />

      {/* --- Layer 2: 마스킹 효과로 나타나는 숨겨진 레이어 --- */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{
          // 동적 문자열 적용
          clipPath: maskClipPath,
        }}
      >
        {/* 시각적 데이터: 파스텔톤 그라데이션 + 데이터 도트 패턴 */}
        <div className="w-full h-full bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
           {/* 데이터망(Data Mesh) 느낌의 도트 패턴 */}
           <div className="absolute inset-0 opacity-30" style={{
               backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)',
               backgroundSize: '20px 20px'
           }} />
           
        </div>
      </motion.div>

    {/* --- Layer 3: 최상단 타이포그래피 --- */}
    <div className="absolute inset-0 z-20 flex flex-col justify-between w-full max-w-[1200px] mx-auto px-8 py-12 md:py-16 pointer-events-none mix-blend-darken">
        
        {/* 3-1. Top Utility Bar: 상단 범례 영역 */}
        <div className="flex justify-between items-start w-full">
           <div className="flex flex-col space-y-1">
              <p className="font-display text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-[#363636]">
                Portfolio '26
              </p>
              <p className="font-pretendard text-[11px] md:text-[12px] font-medium tracking-widest text-[#767676]">
                South Korea
              </p>
           </div>
           <div className="text-right flex flex-col space-y-1">
              <p className="font-display text-[12px] md:text-[14px] font-bold tracking-[0.1em] uppercase text-[#363636]">
                Available for work
              </p>
              <p className="font-pretendard text-[11px] md:text-[12px] font-medium tracking-widest text-[#767676]">
                zini.works.lab@gmail.com
              </p>
           </div>
        </div>

        {/* 3-2. Main Typography */}
        <div className="flex flex-col w-full my-10 md:my-20">
           {/* 이름 영역: 들여쓰기를 통한 리듬감 부여 */}
           <h1 className="font-display text-[14vw] md:text-[150px] font-[900] text-[#363636] leading-[0.75] tracking-tighter uppercase">
              Yujin
           </h1>
           <h1 className="font-display text-[14vw] md:text-[150px] font-[900] text-[#363636] leading-[0.75] tracking-tighter uppercase ml-[10%] md:ml-[15%]">
              Park<span className="text-green-500">.</span>
           </h1>

           {/* 하단 서브 텍스트 */}
           <div className="flex flex-col md:flex-row md:items-end justify-between mt-16 md:mt-24 w-full gap-8">
              {/* 한글 서브 텍스트: 유진님의 가치관 반영 */}
            <div className="flex flex-col space-y-2 max-w-[400px]">
                <p className="font-pretendard text-[16px] md:text-[18px] font-bold text-[#363636] leading-tight">
                    공간의 미학과 데이터 분석의 경계를 연결합니다.
                </p>
                <p className="font-pretendard text-[14px] md:text-[15px] text-[#767676] leading-relaxed opacity-90 mt-5">
                    논리와 감각이 공존하는 환경을 설계하며, <br />
                    알고리즘을 통해 공간의 새로운 가능성을 탐구합니다.
                </p>
            </div>
              
              <div className="flex flex-col text-left md:text-right">
                 <span className="font-display text-[45px] md:text-[70px] font-[900] text-[#d2d2d2] uppercase leading-[0.8] tracking-tight">
                    Landscape
                 </span>
                 <span className="font-display text-[45px] md:text-[70px] font-[900] text-[#d2d2d2] uppercase leading-[0.8] tracking-tight mt-2">
                    AI Planner
                 </span>
              </div>
           </div>
        </div>
    </div>

    </section>
  );
};

export default HeroSection;