import React, { useState, useRef, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';
import { IoMdFlower } from "react-icons/io";

import photoAppIcon from '../assets/photoapp.png';

// 📸 사진 임포트 (1~5번)
import grid_1 from '../assets/photo/grid_1.jpg'; import grid_2 from '../assets/photo/grid_2.jpg';
import grid_3 from '../assets/photo/grid_3.jpg'; import grid_4 from '../assets/photo/grid_4.jpg';
import grid_5 from '../assets/photo/grid_5.jpg';

import travel_1 from '../assets/photo/travel_1.jpg'; import travel_2 from '../assets/photo/travel_2.jpg';
import travel_3 from '../assets/photo/travel_3.jpg'; import travel_4 from '../assets/photo/travel_4.jpg';
import travel_5 from '../assets/photo/travel_5.jpg';

import heart_1 from '../assets/photo/heart_1.jpg'; import heart_2 from '../assets/photo/heart_2.jpg';
import heart_3 from '../assets/photo/heart_3.jpg'; import heart_4 from '../assets/photo/heart_4.jpg';
import heart_5 from '../assets/photo/heart_5.jpg';

import plant_1 from '../assets/photo/plant_1.jpg'; import plant_2 from '../assets/photo/plant_2.jpg';
import plant_3 from '../assets/photo/plant_3.jpg'; import plant_4 from '../assets/photo/plant_4.jpg';
import plant_5 from '../assets/photo/plant_5.jpg';

import businessImg from '../assets/business.png';
import pnuImg from '../assets/pnu.png';

const Home = () => {

  const [activePhotoTab, setActivePhotoTab] = useState('grid');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isBusinessHovered, setIsBusinessHovered] = useState(false);

  const photosData = {
    grid: [grid_1, grid_2, grid_3, grid_4, grid_5],
    travel: [travel_1, travel_2, travel_3, travel_4, travel_5],
    heart: [heart_1, heart_2, heart_3, heart_4, heart_5],
    plant: [plant_1, plant_2, plant_3, plant_4, plant_5]
  };

  useEffect(() => { setPhotoIndex(0); }, [activePhotoTab]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [activePhotoTab]);

  return (
    <PageLayout>
      {/* LEFT SECTION (6 Columns) */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">

        <Card aspect="aspect-square" colSpan="col-span-12" />

        <Card aspect="aspect-[150/73]" colSpan="col-span-12" />

        <div className="grid grid-cols-2 gap-4">
          <Card aspect="aspect-square" colSpan="col-span-1"/>
          <Card aspect="aspect-square" colSpan="col-span-1"/>
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Card aspect="aspect-square" colSpan="col-span-1" />
            <Card aspect="aspect-square" colSpan="col-span-1" />
          </div>
          
          <Card className="h-full" colSpan="col-span-1" />
        </div>
      </div>

      {/* RIGHT SECTION (6 Columns) */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">

        <Card aspect="aspect-[150/73]" />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {/* 📸 사진 앱 카드 */}
            <Card aspect="aspect-square" className="relative overflow-hidden group">
              {photosData[activePhotoTab].map((photo, index) => (
                <img key={index} src={photo} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === photoIndex ? 'opacity-100' : 'opacity-0'}`} />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-[10px] overflow-hidden z-10 bg-white shadow-sm"><img src={photoAppIcon} className="w-full h-full object-cover" /></div>
              
              <div className="absolute bottom-4 inset-x-4 h-[40px] rounded-full bg-white/40 backdrop-blur-md border border-white/30 flex items-center px-1.5 opacity-0 group-hover:opacity-100 transition-all z-10">
                <div className="absolute h-[32px] w-[calc(25%-3px)] bg-white/50 rounded-full shadow-sm transition-all duration-300 z-0" style={{ left: activePhotoTab === 'grid' ? '6px' : activePhotoTab === 'travel' ? 'calc(25% + 3px)' : activePhotoTab === 'heart' ? 'calc(50% + 1.5px)' : 'calc(75% - 1.5px)' }} />
                <button onClick={() => setActivePhotoTab('grid')} className="w-1/4 z-10 flex justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg></button>
                <button onClick={() => setActivePhotoTab('travel')} className="w-1/4 z-10 flex justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg></button>
                <button onClick={() => setActivePhotoTab('heart')} className="w-1/4 z-10 flex justify-center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button>
                <button onClick={() => setActivePhotoTab('plant')} className="w-1/4 z-10 flex justify-center"><IoMdFlower size={20} /></button>
              </div>
            </Card>
            <Card aspect="aspect-square" colSpan="col-span-1" /> 
          </div>
          
          <Card className="h-full" colSpan="col-span-1" />
        </div>

        <Card aspect="aspect-[150/73]" />

        <div className="grid grid-cols-2 gap-4">
          {/* ✨ 배경 스포트라이트 오버레이 (화살표 호버 시 전체 화면 하얗게) */}
          <div 
            className={`fixed inset-0 bg-white/80 backdrop-blur-[2px] z-40 transition-all duration-500 pointer-events-none 
              ${isBusinessHovered ? 'opacity-100' : 'opacity-0'}`} 
          />

          {/* ✨ Business Card */}
          <Card 
            aspect="aspect-square" 
            colSpan="col-span-1"
            // 1. !p-0 : Card 컴포넌트의 기본 여백을 강제로 없애서 이미지가 꽉 차게 함
            // 2. !overflow-visible : 카드 밖으로 텍스트가 잘리지 않고 나올 수 있게 허용
            // 3. bg-white : 배경을 하얗게 만들어 이미지와 일체감 형성 (이중 카드 느낌 제거)
            className={`!p-0 !overflow-visible group transition-all duration-500 relative z-50`} >

            {/* 카드 내부 전체를 덮는 클릭 영역 */}
            <a 
              href="https://laon-gardenscape-proposal.com" // 🔗 제안서 링크
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 block w-full h-full rounded-[inherit] overflow-hidden"
            >
              {/* 전체 영역 이미지 중앙 정렬 */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={businessImg} 
                  alt="Business" 
                  // object-contain으로 원본 비율 유지하며 꽉 차게!
                  className="w-full h-full object-contain scale-80 
                  transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" 
                />
              </div>

              {/* ✨ 좌측 하단 화살표 + 원 (left-3 bottom-3 고정 완료) */}
              {/* isBusinessHovered 일 때 초록색(#B8DB80)으로 완벽하게 변함 */}
              <div 
                className={`absolute bottom-3 left-3 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 z-20 cursor-pointer
                  ${isBusinessHovered ? 'bg-[#d2d2d2] border-[#e5e5e5] text-white' : 'bg-white border-[#e5e5e5] text-[#adadad]'}`}
                onMouseEnter={() => setIsBusinessHovered(true)}
                onMouseLeave={() => setIsBusinessHovered(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>

            {/* ✨ 카드 밖 하단에 나타나는 텍스트 */}
            <div 
              // w-max와 whitespace-nowrap을 추가해 텍스트가 억지로 두 줄로 꺾이는 현상 방지
              className={`absolute top-[calc(100%+6px)] left-0 w-max whitespace-nowrap transition-all duration-500 pointer-events-none
                ${isBusinessHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
              <p className="text-[#767676] text-[13px]">
                <strong className="font-bold">🌼 Grow</strong>
                <span className="text-[#adadad] text-[13px] font-medium"> — 정원 식물 DB 구축</span>
              </p>
            </div>
          </Card>

          <Card aspect="aspect-square" colSpan="col-span-1" /> 
          
          {/* ✨ Pusan National University Card (Fixed 1:1 & Flush Image) */}
          <Card 
            aspect="aspect-square" 
            colSpan="col-span-1"
            className="!p-0 flex flex-col relative group cursor-default overflow-hidden"
          >

            <div className="p-5 flex flex-col z-10">
              <h3 className="text-[13px] font-bold text-[#767676] tracking-tight leading-tight mt-1">
                Pusan National University
              </h3>

              <h3 className="text-[13px] font-bold text-[#767676] tracking-tight leading-tight mt-3">
                Major <span className="text-[14px] text-[#adadad] font-medium"> 조경학과</span>
              </h3>

              <h3 className="text-[13px] font-bold text-[#767676] tracking-tight leading-tight mt-1">
                Minor <span className="text-[14px] text-[#adadad] font-medium"> 도시공학과</span>
              </h3>
            
            </div>

            {/* absolute bottom-0을 써서 카드의 1:1 비율을 깨지 않고 바닥에 딱 고정시킵니다. */}
            <div className="absolute bottom-0 inset-x-0 w-full flex justify-center transition-transform duration-500 group-hover:scale-105 origin-bottom z-0 pointer-events-none">
              <img 
                src={pnuImg} 
                alt="PNU Character" 
                className="w-[100%] h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" 
              />
            </div>
          </Card>

          <Card aspect="aspect-square" colSpan="col-span-1" /> 
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;