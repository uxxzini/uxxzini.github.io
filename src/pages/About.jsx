import React, { useState, useRef, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';
import { IoMdFlower } from "react-icons/io";

import instaImg from '../assets/zini.jpg';
import musicAppIcon from '../assets/musicapp.png';
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

const About = () => {
  const [isInstaHovered, setIsInstaHovered] = useState(false);
  const [activePhotoTab, setActivePhotoTab] = useState('grid');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lang, setLang] = useState('ko');

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

  // 🎵 플레이리스트 데이터
  const playlist = [
    { id: 1, title: "Let's!", artist: "Yujin", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { id: 2, title: "Digital Garden", artist: "Yujin", cover: "https://images.unsplash.com/photo-1416879598555-aa456d2003c2?q=80&w=200", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { id: 3, title: "Cooking Nature", artist: "React", cover: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=200", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const currentSong = playlist[currentIndex];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.log("재생 오류:", e));
    }
  }, [currentIndex, isPlaying]);

  const togglePlay = (e) => { e.preventDefault(); isPlaying ? audioRef.current.pause() : audioRef.current.play(); setIsPlaying(!isPlaying); };
  const handleNext = (e) => { e.preventDefault(); setCurrentIndex((prev) => (prev + 1) % playlist.length); };
  const handlePrev = (e) => { e.preventDefault(); setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length); };
  const toggleMute = (e) => { e.preventDefault(); if (audioRef.current) { audioRef.current.muted = !isMuted; setIsMuted(!isMuted); } };

  return (
    <PageLayout>
      {/* 1. 왼쪽 기둥 */}
      {/* md:h-auto와 relative를 통해 우측 기둥이 결정한 높이를 그대로 따라가게 만듭니다. */}
      <div className="col-span-12 md:col-span-6 relative h-[600px] md:h-auto">
        {/* md:absolute md:inset-0 속성으로 카드가 스스로 커지지 않고 부모 높이에 딱 맞춰지도록 강제합니다. */}
        <Card className="w-full h-full md:absolute md:inset-0 p-5 md:p-7 flex flex-col overflow-hidden z-10">
          
          {/* Main Title & Language Toggle */}
          <div className="flex items-center justify-between shrink-0 mb-4 z-10">
            <h1 className="text-[20px] md:text-[24px] font-extrabold text-[#363636] tracking-tight">
              Who I am.
            </h1>
            
            {/* ✨ 한/영 전환 토글 스위치 */}
            <div 
              className="relative flex items-center bg-[#f0f0f0] rounded-full p-1 shadow-inner w-[84px] h-[32px] cursor-pointer"
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            >
              {/* 스르륵 움직이는 하얀색 배경 캡슐 */}
              <div 
                className={`absolute left-1 w-[36px] h-[24px] bg-white rounded-full shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] 
                  ${lang === 'ko' ? 'translate-x-0' : 'translate-x-[40px]'}`} 
              />
              {/* KR 텍스트 */}
              <span className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 
                ${lang === 'ko' ? 'text-[#363636]' : 'text-[#adadad]'}`}>
                KR
              </span>
              {/* EN 텍스트 */}
              <span className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 
                ${lang === 'en' ? 'text-[#363636]' : 'text-[#adadad]'}`}>
                EN
              </span>
            </div>
          </div>

          {/* 내용 (내부 스크롤) */}
          <div className="flex-1 overflow-y-auto pr-0 pb-4 flex flex-col gap-7 relative z-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            <h2 className="text-[16px] md:text-[20px] font-medium text-[#458C95] leading-snug mb-3 italic">
              I design structure<br />
              : in spaces, in data, and in the projects I take on.
            </h2>

            {/* 1. WHERE I STARTED */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[11px] font-bold text-[#767676] uppercase">Where I started</h3>
              <p className="text-[13.5px] md:text-[14px] text-[#363636] leading-[1.7] font-medium text-justify">
                {lang === 'ko' ? (
                  <>공공기관에서 조경 데이터를 다루며 커리어를 시작했습니다. 식재 정보와 공간 활용 현황을 기록하고 관리하는 조용한 일상 속에서, 저는 단순한 기록 이상의 것을 발견했습니다. 흩어진 정보에 구조를 부여하고, 불일치를 일관성으로 바꾸는 그 순간 — 물리적 공간을 다루는 일 속에서 <strong className="text-[#363636] font-semibold">데이터의 진짜 매력</strong>을 처음 느꼈습니다.</>
                ) : (
                  <>My career began at a public institution, managing landscape data — recording planting information, documenting spatial usage, and keeping it all consistent. In that quiet, detail-driven work, I discovered something bigger than the task itself: the moment you give scattered information a structure, everything becomes clearer. That's where my <strong className="text-[#363636] font-semibold">passion for data</strong> was born — not in a classroom, but in the field.</>
                )}
              </p>
            </div>

            {/* 2. WHAT I USED TO DO */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[11px] font-bold text-[#767676] uppercase">What I used to do</h3>
              <p className="text-[13.5px] md:text-[14px] text-[#363636] leading-[1.7] font-medium text-justify">
                {lang === 'ko' ? (
                  <>생활정원 40개소 조성 사업에 참여해, 38개 시공사의 제각각인 서류 양식을 단일 표준으로 통합하고 검토 프로세스 개선에 기여했습니다. 그 과정에서 <strong className="text-[#363636] font-semibold">135억 원 규모의 예산이 100% 집행</strong>되는 현장을 함께 만들었습니다. 코로나 시기 학생회장으로 10인 팀을 이끌며 전례 없는 기획을 성공시킨 경험은, 불확실한 환경에서도 문제의 본질을 찾아 새로운 해결책을 만들어내는 훈련이 되었습니다.</>
                ) : (
                  <>I contributed to a 40-site urban garden development project, helping standardize documentation across 38 contractors with entirely different filing formats — and improving the review process from the ground up. Together, we saw <strong className="text-[#363636] font-semibold">₩13.5B in budget executed at 100%</strong>. As student president during COVID-19, I led a 10-person team through an unprecedented initiative, sharpening my instinct for finding the root of a problem and building solutions that actually work.</>
                )}
              </p>
            </div>

            {/* 3. WHAT I DO NOW */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[11px] font-bold text-[#767676] uppercase">What I do now</h3>
              <p className="text-[13.5px] md:text-[14px] text-[#363636] leading-[1.7] font-medium ">
                {lang === 'ko' ? (
                  <>조경 전문가를 넘어, Python과 통계를 다루는 <strong className="text-[#363636] font-semibold">데이터 분석가</strong>이자 React로 제품을 만드는 <strong className="text-[#363636] font-semibold">웹 개발자</strong>로 영역을 확장하고 있습니다. <br />타고난 완벽주의를 명확한 우선순위 설정으로 보완하며, 디테일과 프로젝트 속도 사이의 균형을 스스로 조율합니다.</>
                ) : (
                  <>I've grown beyond landscape architecture into <strong className="text-[#363636] font-semibold">data analytics</strong> (Python, statistics) and <strong className="text-[#363636] font-semibold">web development</strong> (React, Tailwind). I'm a natural perfectionist — one who's learned to set clear priorities and balance sharp attention to detail with the momentum a real project demands.</>
                )}
              </p>
            </div>

            {/* 4. WHAT I'M LOOKING FOR */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[11px] font-bold text-[#767676] uppercase">What I'm looking for</h3>
              <p className="text-[13.5px] md:text-[14px] text-[#363636] leading-[1.7] font-medium">
                {lang === 'ko' ? (
                  <>궁극적으로는 사람들에게 영감을 주는 <strong className="text-[#363636] font-semibold">정원 작가</strong>이자 <strong className="text-[#363636] font-semibold">공간 디자이너</strong>를 꿈꿉니다. <br />나아가 데이터 분석 역량을 융합해, AI 시대의 <strong className="text-[#363636] font-semibold">이노베이터 그리고 PM</strong>으로서 물리적 공간과 디지털 기술을 혁신적으로 연결하는 일을 하고 싶습니다.</>
                ) : (
                  <>My long-term vision is to become a <strong className="text-[#363636] font-semibold">garden writer</strong> and <strong className="text-[#363636] font-semibold">spatial designer</strong> who inspires people. And beyond that — to merge my analytical background with emerging technology, working as an <strong className="text-[#363636] font-semibold">AI-era innovator and PM</strong> who bridges the physical world of space with the digital world of possibility.</>
                )}
              </p>
            </div>

          </div>
          
          {/* 하단 닻(Anchor) 역할을 하는 아이콘 바 */}
          <div className="shrink-0 pt-5 mt-4 border-t border-[#f0f0f0] flex items-center gap-5 text-[#adadad] z-10 bg-[#fbfbfb]">
            
            {/* 1. Email Icon (클릭 시 메일 쓰기 창 열림) */}
            <a 
              href="mailto:zini.works.lab@gmail.com"
              className="relative group hover:text-[#1d1d1f] transition-colors block"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              
              {/* ✨ 커스텀 툴팁 */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#363636] text-white text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-sm w-max pointer-events-none">
                Email Me
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#363636]"></div>
              </div>
            </a>

            {/* 2. GitHub Icon (클릭 시 새 창에서 깃허브 열림) */}
            <a 
              href="https://github.com/uxxzini" 
              target="_blank" // 새 창에서 열기
              rel="noopener noreferrer" // 보안을 위한 필수 속성
              className="relative group hover:text-[#1d1d1f] transition-colors block"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              
              {/* ✨ 커스텀 툴팁 */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#363636] text-white text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-sm w-max pointer-events-none">
                GitHub
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-[#363636]"></div>
              </div>
            </a>
            
          </div>

        </Card>
      </div>

      {/* 2. 중간 기둥 */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
        {/* 인스타 카드 */}
        <Card aspect="aspect-square" className="p-5 flex flex-col justify-between relative overflow-hidden group border border-[#e5e5e5]">
          <div className={`absolute top-0 right-0 transition-all duration-500 ease-in-out z-0 ${isInstaHovered ? 'w-full h-full mt-0 mr-0 rounded-none' : 'w-9 h-9 mt-6 mr-6 rounded-xl'}`} style={{ background: '#363636' }} />
          <div className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center z-10 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <div className="z-10 relative pointer-events-none text-[#363636]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#adadad] border border-white/20"><img src={instaImg} className="w-full h-full object-cover" /></div>
              <div className="flex flex-col">
                <span className={`text-[13px] font-bold transition-colors ${isInstaHovered ? 'text-white' : ''}`}>YUJIN</span>
                <span className={`text-[11px] transition-colors ${isInstaHovered ? 'text-white/70' : 'text-[#adadad]'}`}>@plotxbloom</span>
              </div>
            </div>
            <p className={`mt-8 text-[14px] leading-relaxed font-medium transition-colors ${isInstaHovered ? 'text-white/90' : ''}`}>자연의 질서와 디지털 로직 사이, <br />그 찰나의 영감들을 기록합니다. ✶</p>
          </div>
          <a href="https://www.instagram.com/plotxbloom" onMouseEnter={() => setIsInstaHovered(true)} onMouseLeave={() => setIsInstaHovered(false)} className={`w-full py-2.5 border rounded-xl flex items-center justify-center gap-1.5 transition-all z-10 relative ${isInstaHovered ? 'bg-white/10 border-white/20 text-white backdrop-blur-sm' : 'bg-white border-[#e5e5ea] shadow-sm'}`}>
            <span className="text-[12px] font-bold">View fragments</span>
          </a>
        </Card>

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

        {/* 💳 자격증 지갑 카드 */}
        <Card aspect="aspect-square" className="flex flex-col overflow-hidden relative !bg-[#fbfbfb]">
          <div className="relative w-full h-full">
            <div className="absolute bottom-1.5 inset-x-0.5 h-[94%] bg-[#F1ECE4] rounded-[22px] z-0 shadow-inner" />
            <div className="absolute inset-0 z-10">
              {/* 카드 1 */}
              <div className="absolute inset-x-4 top-[8%] h-[80px] z-[1] transform transition-transform duration-300 ease-out hover:-translate-y-6 group cursor-default">
                <div className="w-full h-full bg-[#B8DB80] rounded-[12px] px-2 py-1 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] flex flex-col border-t border-white/20">
                  <h3 className="text-[13px] font-bold text-white tracking-wide px-1">운전면허 1종 보통(A)</h3>
                  {/* 상세 내용 (호버 시에만 표시) */}
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-1">
                    <p className="text-[10px] text-white/90 font-medium">Class 1 Regular Driver's License</p>
                  </div>
                </div>
              </div>
              {/* 카드 2 */}
              <div className="absolute inset-x-4 top-[20%] h-[80px] z-[2] transform transition-transform duration-300 ease-out hover:-translate-y-8 group cursor-default">
                <div className="w-full h-full bg-[#F7F6D3] rounded-[12px] px-2 py-1 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] flex flex-col border-t border-white/20">
                  <h3 className="text-[13px] font-bold text-[#767676] tracking-wide px-1">자연생태복원기사</h3>
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-1">
                    <p className="text-[10px] text-[#767676]/70 font-medium leading-tight">Engineer in Nature Environment <br/> and Ecological Restoration</p>
                  </div>
                </div>
              </div>
              {/* 카드 3 */}
              <div className="absolute inset-x-4 top-[32%] h-[80px] z-[3] transform transition-transform duration-300 ease-out hover:-translate-y-8 group cursor-default">
                <div className="w-full h-full bg-[#FFE4EF] rounded-[12px] px-2 py-1 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] flex flex-col border-t border-white/20">
                  <h3 className="text-[13px] font-bold text-[#767676] tracking-wide px-1">ADsP</h3>
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-1">
                    <p className="text-[10px] text-[#767676]/70 font-medium leading-tight">Advanced Data Analytics <br/> Semi-Professional</p>
                  </div>
                </div>
              </div>
              {/* 카드 4 */}
              <div className="absolute inset-x-4 top-[44%] h-[130px] z-[4] transform transition-transform duration-300 ease-out hover:-translate-y-6 group cursor-default">
                <div className="w-full h-[100px] bg-[#F39EB6] rounded-[12px] px-2 py-1 shadow-[0_-2px_10px_rgba(0,0,0,0.15)] flex flex-col border-t border-white/20">
                  <h3 className="text-[13px] font-bold text-white tracking-wide px-1">조경기사</h3>
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-1">
                    <p className="text-[10px] text-white/90 font-medium">Engineer Landscape Architecture</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 지갑 앞면 */}
            <div className="absolute bottom-1.5 inset-x-0.5 h-[42%] bg-[#F1ECE4] opacity-90 rounded-[22px] z-20 p-2 flex items-center justify-center">
              <div className="w-full h-full border border-[#636366]/20 rounded-[16px] border-dashed flex items-center justify-center">
                <span className="text-[#a89f9a] text-[13px] font-serif italic">Certifications</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 3. 오른쪽 기둥 */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
        {/* Apple Music 카드 */}
        <Card aspect="aspect-square" className="flex flex-col justify-between p-5 bg-[#fbfbfb] border border-[#f0f0f0] rounded-[24px]">
          <audio ref={audioRef} src={currentSong.src} onEnded={handleNext} />
          <div className="flex justify-between items-start">
            <div className="w-[110px] h-[110px] rounded-[10px] overflow-hidden shadow-sm border border-[#e5e5e5] bg-white">
               <img src={currentSong.cover} className="w-full h-full object-cover" />
            </div>
            <div className="w-9 h-9 rounded-[9px] overflow-hidden"><img src={musicAppIcon} className="w-full h-full object-cover" /></div>
          </div>
          <div className="mt-2 mb-2 text-[#1d1d1f]">
            <h3 className="text-[16px] font-bold">{currentSong.title}</h3>
            <p className="text-[13px] text-[#86868b]">{currentSong.artist}</p>
          </div>
          <div className="w-full h-[40px] bg-white rounded-full border border-[#e5e5e5] flex items-center justify-between px-5 shadow-sm">
            <a href="https://music.apple.com/kr/playlist/uziniee/pl.u-PDb40JDsLkA6JrJ" target="_blank" className="text-[#86868b]"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z"/></svg></a>
            <button onClick={handlePrev} className="text-[#86868b]"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
            <button onClick={togglePlay} className="text-[#86868b]">{isPlaying ? <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>}</button>
            <button onClick={handleNext} className="text-[#86868b]"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
            <button onClick={toggleMute} className="text-[#86868b]">{isMuted ? <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>}</button>
          </div>
        </Card>

        {/* 타임라인 카드 */}
        {/* [우측 2번] 8-Year Full-Cover Timeline Card */}
        <Card className="flex-1 bg-white border border-[#e5e5e5] p-0 relative overflow-hidden">
          
          {/* 2026 */}
          <div className="group absolute inset-x-0 top-0 h-[calc(100%/6)] hover:top-0 hover:h-full z-[1] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white border-b border-[#f0f0f0] overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2026</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                {/* 구분자 | 색상 #adadad 및 mx-1 적용 */}
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">02 - Present <span className="text-[#adadad] mx-1">|</span> Career</span>
                {/* 폰트 굵기 font-medium 적용 */}
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">조경회사 입사 및 실무 시작</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">01 - 04 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">2026 서울국제정원박람회 시민동행정원 참여</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">01 <span className="text-[#adadad] mx-1">|</span> Internship</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">르노코리아 (Renault Korea Corp.) 인턴십 수료</p>
              </div>

            </div>
          </div>

          {/* 📍 2025 */}
          <div className="group absolute inset-x-0 top-[calc(100%/6*1)] h-[calc(100%/6)] hover:top-0 hover:h-full z-[2] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#fcfcfc] hover:bg-white border-b border-[#f0f0f0] overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2025</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">10 - 12 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">공모전: 여수광양항 AI 혁신제안 대국민 공모</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">09 - 11 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">2025년 데이터 문제해결은행 활용 경진대회_데이터레시피 개발</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">07 - 12 <span className="text-[#adadad] mx-1">|</span> Education</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  BDIA 빅데이터 전문가 인재양성 사업 참여
                  {/* 세부 항목들 (들여쓰기 및 연한 텍스트로 계층 분리) */}
                  <span className="block text-[12.5px] text-[#555] mt-1">- 프로젝트: 영화 흥행 분석</span>
                  <span className="block text-[12.5px] text-[#555] mt-0.5">- 프로젝트: 해양 기상 변수에 따른 어획량 분석 및 예측 모델 개발</span>
                  <span className="block text-[12.5px] text-[#555] mt-0.5">- 프로젝트: 이미지 유사도 기반 가방 추천 시스템 개발</span>
                  <span className="block text-[12.5px] text-[#555] mt-0.5">- 프로젝트: 인공지능 기반 축제 안전관리 플랫폼</span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">02 <span className="text-[#adadad] mx-1">|</span> Education</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">부산대학교 조경학과(부전공 도시공학과) 공학사 학위 취득</p>
              </div>

            </div>
          </div>

          {/* 📍 2024 */}
          <div className="group absolute inset-x-0 top-[calc(100%/6*2)] h-[calc(100%/6)] hover:top-0 hover:h-full z-[3] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white border-b border-[#f0f0f0] overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2024</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">01 - 11 <span className="text-[#adadad] mx-1">|</span> Career</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  국립세종수목원 정원사업센터
                  <span className="block text-[12.5px] text-[#555] mt-1">- 생활밀착형 숲 사업 운영보조원</span>
                </p>
              </div>

            </div>
          </div>

          {/* 📍 2023 */}
          <div className="group absolute inset-x-0 top-[calc(100%/6*3)] h-[calc(100%/6)] hover:top-0 hover:h-full z-[4] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#fcfcfc] hover:bg-white border-b border-[#f0f0f0] overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2023</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">09 - 12 <span className="text-[#adadad] mx-1">|</span> Career</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  국립세종수목원 정원사업센터
                  <span className="block text-[12.5px] text-[#555] mt-1">- 생활밀착형 숲 사업 운영보조원</span>
                </p>
              </div>

            </div>
          </div>

          {/* 📍 2022 */}
          <div className="group absolute inset-x-0 top-[calc(100%/6*4)] h-[calc(100%/6)] hover:top-0 hover:h-full z-[5] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white border-b border-[#f0f0f0] overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2022</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">10 - 12 <span className="text-[#adadad] mx-1">|</span> Career</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  국립백두대간수목원 정원사업센터 기간제근로자
                  <span className="block text-[12.5px] text-[#555] mt-1">- 생활밀착형 숲 사업 운영보조원</span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">10 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  2022 대한민국 정원산업 박람회 반짝(pop-up)정원 경연대회 참여
                  <span className="block text-[12.5px] text-[#555] mt-1">- 작품명: 정(情)류장:마음을 기다리는 곳</span>
                  <span className="block text-[12.5px] text-[#555] mt-0.5">- 한국수목원정원관리원장상 수상</span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">07 <span className="text-[#adadad] mx-1">|</span> Practicum</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">국립백두대간수목원 전시원관리실 현장실습</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">04 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  제 18회 부산도시농업박람회 전국텃밭정원 디자인 공모전 참여
                  <span className="block text-[12.5px] text-[#555] mt-1">- 작품명: 알 이즈 웰(All is well)</span>
                  <span className="block text-[12.5px] text-[#555] mt-0.5">- 우수상 수상</span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">03 - 06 <span className="text-[#adadad] mx-1">|</span> Practicum</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">부산도시공사 토목사업처 조경사업부 현장실습</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">01 - 07 <span className="text-[#adadad] mx-1">|</span> Research(A.E.Lab.)</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">부산 태종대 식생 조사 및 보전관리 방안 연구 참여</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">01 - 02 <span className="text-[#adadad] mx-1">|</span> Practicum</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">국립세종수목원 전시원관리실 현장실습</p>
              </div>

            </div>
          </div>

          {/* 📍 2021 */}
          <div className="group absolute inset-x-0 top-[calc(100%/6*5)] h-[calc(100%/6)] hover:top-0 hover:h-full z-[6] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-[#fcfcfc] hover:bg-white overflow-hidden cursor-default flex flex-col">
            <div className="shrink-0 h-full group-hover:h-[70px] flex items-center px-6 transition-all duration-500">
              <h3 className="text-[15px] font-bold text-[#363636] group-hover:text-[24px] group-hover:text-[#1d1d1f] tracking-tight transition-all duration-500">2021</h3>
            </div>
            <div className="flex-1 px-6 pb-6 overflow-y-auto opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex flex-col gap-5" style={{ scrollbarWidth: 'none' }}>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">10 - '22.07. <span className="text-[#adadad] mx-1">|</span> Research(A.E.Lab.)</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">민간공원조성 특례사업 추진효과 극대화를 위한 공원시설 설계 보완 및 특화 추진계획 참여</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">08 - 10 <span className="text-[#adadad] mx-1">|</span> Research(A.E.Lab.)</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">경상남도 교내 수목 조사 및 현황도면 작성 용역 참여</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">07 <span className="text-[#adadad] mx-1">|</span> Project</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">부산서여자고등학교 텃밭정원 시공</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">04 - 10 <span className="text-[#adadad] mx-1">|</span> Research(A.E.Lab.)</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">산림습원 등 특정지역 생태계 서비스 평가 연구 참여</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">03 - 12 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">부산대학교 조경학과 학회장</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-[#86868b] tracking-wider uppercase">03 - 09 <span className="text-[#adadad] mx-1">|</span> Experience</span>
                <p className="text-[13.5px] text-[#1d1d1f] font-medium leading-snug">
                  정원드림프로젝트 참여
                  <span className="block text-[12.5px] text-[#555] mt-1">- 작품명: 유생의 여정(구미시 인동향교 앞 녹지)</span>
                </p>
              </div>

            </div>
          </div>

        </Card>

      </div>
    </PageLayout>
  );
};

export default About;