import React from 'react';
import { useParams } from 'react-router-dom';

const ArchiveDetail = () => {
  const { title } = useParams(); // URL에서 제목 가져오기

  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20 lg:px-40">
      {/* 1. Header Area */}
      <div className="mb-16">
        <h1 className="text-[40px] md:text-[56px] font-bold text-[#1d1d1f] leading-tight mb-2">
          {decodeURIComponent(title)}
        </h1>
        <p className="text-[18px] text-[#86868b] font-medium">Sub-description or Category</p>
        <div className="w-full h-[1px] bg-[#f0f0f0] mt-8" />
      </div>

      {/* 2. Content Grid (Sidebar + Main Description) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        
        {/* Left Sidebar (Metadata) */}
        <div className="md:col-span-4 flex flex-col gap-10">
          <div>
            <h4 className="text-[11px] font-bold text-[#adadad] uppercase tracking-widest mb-4">My Role</h4>
            <ul className="text-[15px] text-[#1d1d1f] font-medium flex flex-col gap-1.5">
              <li>Landscape Designer</li>
              <li>Data Strategist</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-[#adadad] uppercase tracking-widest mb-4">Tools</h4>
            <ul className="text-[15px] text-[#1d1d1f] font-medium flex flex-col gap-1.5">
              <li>Python, React</li>
              <li>AutoCAD, Rhino</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-[#adadad] uppercase tracking-widest mb-4">Timeline</h4>
            <p className="text-[15px] text-[#1d1d1f] font-medium">2026.01 - 2026.02</p>
          </div>
        </div>

        {/* Right Main Description */}
        <div className="md:col-span-8">
          <section className="mb-12">
            <h4 className="text-[11px] font-bold text-[#adadad] uppercase tracking-widest mb-4">Description</h4>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.7] font-medium text-justify">
              여기에 프로젝트에 대한 상세한 설명을 작성합니다. "흙을 만지던 손으로 데이터를 설계하는" 유진님만의 독특한 관점이 잘 드러나도록 내용을 채워보세요. 
            </p>
          </section>

          <section className="mb-12">
            <h4 className="text-[11px] font-bold text-[#adadad] uppercase tracking-widest mb-4">Context</h4>
            <p className="text-[17px] text-[#1d1d1f] leading-[1.7] font-medium text-justify">
              프로젝트의 배경, 마주했던 문제, 그리고 이를 유진님만의 혁신적인 방식으로 어떻게 해결했는지에 대한 깊이 있는 이야기를 담을 수 있습니다.
            </p>
          </section>

          {/* Action Button (e.g. Visit Website) */}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#e5e5e5] rounded-full text-[14px] font-bold text-[#1d1d1f] hover:bg-[#fcfcfc] transition-all shadow-sm"
          >
            Project Link
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </div>

      {/* 3. Image Section (Bottom) */}
      <div className="flex flex-col gap-10">
        <div className="w-full aspect-video bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-sm">
          {/* <img src="..." className="w-full h-full object-cover" /> */}
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="aspect-square bg-[#f9f9f9] rounded-2xl shadow-sm"></div>
          <div className="aspect-square bg-[#f9f9f9] rounded-2xl shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveDetail;