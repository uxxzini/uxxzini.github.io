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
    { id: 1, title: "Let's!", artist: "호피폴라", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
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
      <div className="col-span-12 md:col-span-6">
        <Card className="h-full bg-white border border-[#e5e5e5] p-10 flex flex-col justify-between">
          <h1 className="text-2xl text-[#adadad] font-light italic">Who is Yujin? ✶ 자기소개서가 들어올 자리입니다.</h1>
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
                <span className={`text-[11px] transition-colors ${isInstaHovered ? 'text-white/70' : 'text-[#adadad]'}`}>@zini.works</span>
              </div>
            </div>
            <p className={`mt-8 text-[14px] leading-relaxed font-medium transition-colors ${isInstaHovered ? 'text-white/90' : ''}`}>자연의 질서와 디지털 로직 사이, <br />그 찰나의 영감들을 기록합니다. ✶</p>
          </div>
          <a href="https://www.instagram.com/zini.works" onMouseEnter={() => setIsInstaHovered(true)} onMouseLeave={() => setIsInstaHovered(false)} className={`w-full py-2.5 border rounded-xl flex items-center justify-center gap-1.5 transition-all z-10 relative ${isInstaHovered ? 'bg-white/10 border-white/20 text-white backdrop-blur-sm' : 'bg-white border-[#e5e5ea] shadow-sm'}`}>
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

        {/* ⏳ 타임라인 카드 */}
        <Card className="flex-1 bg-white border border-[#e5e5e5]" />
      </div>
    </PageLayout>
  );
};

export default About;