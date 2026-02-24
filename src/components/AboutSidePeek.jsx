import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { FiX, FiBookOpen, FiStar, FiBriefcase, FiLayers } from 'react-icons/fi';

{/* --- About 상세 내용을 담은 사이드 패널 컴포넌트 --- */}
const AboutSidePeek = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isOpen = location.pathname === '/about';
    const closePeek = () => navigate('/');
  
    // 1. 필터 상태 관리 ('all', 'education', 'experience', 'career')
    const [activeFilter, setActiveFilter] = useState('all');
  
    // 2. 타임라인 데이터
    const timelineData = [
      {
        year: "2026",
        events: [
          { date: "02 - Present", title: "Joined firm as a Landscape Architect", category: "career" },
          { date: "01 - 02", title: "Contest: Seoul International Garden Show 2026 (Citizen Companion Garden Open Call)", category: "experience" },
          { date: "01", title: "Internship: Renault Korea Corp.", category: "experience" }
        ]
      },
      {
        year: "2025",
        events: [
          { date: "11 - 12", title: "Project: AI-powered Public Safety Management Platform for Festivals", category: "experience" },
          { date: "10 - 12", title: "Award: Yeosu Gwangyang Port AI Innovation Challenge", category: "experience" },
          { date: "10", title: "Project: Image Similarity-based Bag Recommendation System Dev.", category: "experience" },
          { date: "10", title: "Course: Python for Beginners (Inflearn)", category: "education" },
          { date: "09 - 11", title: "Contest: 2025 Data Problem Solving Bank Competition (Data Recipe Dev.)", category: "experience" },
          { date: "09", title: "Project: Fishery Yield Forecasting Model based on Marine Meteorological Data", category: "experience" },
          { date: "08", title: "Project: Movie Box Office Data Analysis", category: "experience" },
          { date: "07 - 12", title: "Course: Project-based Big Data Specialist Program", category: "education" },
          { date: "02", title: "Degree: B.E. in Landscape Architecture (Minor: Urban Engineering), Pusan National University", category: "education" }
        ]
      },
      {
        year: "2024",
        events: [
          { date: "01 - 11", title: "Project Associate, Garden Business Center @ Sejong National Arboretum", category: "career" }
        ]
      },
      { 
        year: "2023", 
        events: [
          { date: "09 - 12", title: "Project Associate, Garden Business Center @ Sejong National Arboretum", category: "career" }
        ] },
      { 
        year: "2022", 
        events: [
          { date: "10 - 12", title: "Project Associate, Garden Business Center @ Baekdudaegan National Arboretum", category: "career" },
          { date: "10", title: "Award: 2022 Korea Garden Industry Expo, Pop-up Garden Competition", category: "experience" },
          { date: "07", title: "Practicum: Exhibition Garden Management, Baekdudaegan National Arboretum", category: "experience" },
          { date: "04", title: "Award: 18th Busan Urban Agriculture Expo National Kitchen Garden Design Contest", category: "experience" },
          { date: "03 - 06", title: "Practicum: Landscape Architecture Dept., Busan Metropolitan Corporation", category: "experience" },
          { date: "01 - 07", title: "Research: Vegetation Survey & Conservation Management for Taejongdae, Busan (A.E.Lab.)", category: "experience" },
          { date: "01 - 02", title: "Practicum: Exhibition Garden Management, Sejong National Arboretum", category: "experience" }
        ] },
      { 
        year: "2021", 
        events: [
          { date: "10 - 07*", title: "Research: Design Optimization & Specialization for Oncheon Park (A.E.Lab.)", category: "experience" },
          { date: "08 - 10", title: "Research: Tree Survey & Mapping for Campus School Forest (A.E.Lab.)", category: "experience" },
          { date: "07", title: "Project: Kitchen Garden Construction at Busan West Girls' High School", category: "experience" },
          { date: "04 - 10", title: "Research: Ecosystem Services Assessment for Forest Wetlands (A.E.Lab.)", category: "experience" },
          { date: "03 - 12", title: "President of Student Council, Dept. of Landscape Architecture, PNU", category: "experience" },
          { date: "03 - 09", title: "Contest: Garden Dream Project (Korea Forest Service)", category: "experience" },
        ] },
      { 
        year: "2020", 
        events: [
          { date: "12 - 02*", title: "Undergraduate Research Intern, A.E.Lab", category: "education" },
        ] },
      { 
        year: "2019", 
        events: [
          { date: "03", title: "Entered Pusan National University (Landscape Architecture)", category: "education" },
          { date: "02", title: "Graduated from Busan Dong Girls’ High School (Natural Sciences)", category: "education" },
        ] }
    ];
  
    // 3. 필터링 로직
    const filteredData = timelineData.map(yearGroup => ({
      ...yearGroup,
      events: yearGroup.events.filter(event => activeFilter === 'all' || event.category === activeFilter)
  })).filter(yearGroup => yearGroup.events.length > 0 || (activeFilter === 'all' && yearGroup.year))
  
    // 4. 툴팁 아이콘 컴포넌트
    const FilterIcon = ({ id, icon: Icon, label }) => (
      <div className="relative group flex items-center justify-center">
        <button
          onClick={() => setActiveFilter(id)}
          className={`text-[14px] transition-all duration-300 ${
            activeFilter === id ? 'text-[#363636] scale-110' : 'text-[#d2d2d2] hover:text-[#363636]'
          }`}
        >
          <Icon />
        </button>
        {/* 툴팁: 마우스 호버 시 상단에 나타남 */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#363636] text-white text-[11px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-pretendard z-50">
          {label}
        </span>
      </div>
    );
  
    return (
      <>
        {/* 배경 오버레이 */}
        <div 
          className={`fixed inset-0 bg-black/5 z-[100] transition-opacity duration-500 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closePeek}
        />
  
        {/* 사이드 패널 컨텐츠 */}
        <div 
          className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-out p-12 overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button onClick={closePeek} className="absolute top-8 right-8 text-2xl text-gray-400 hover:text-black transition-colors">
            <FiX />
          </button>
  
          <div className="mt-8">
            <h2 className="font-display text-[24px] font-medium text-[#363636] mb-8">Bio</h2>
  
            {/* 탭 & 필터 영역 */}
            <div className="flex items-center mb-6">
              <div className="w-[75px] font-pretendard text-[16px] font-medium text-[#363636] flex-shrink-0">
                <span className="pb-1">Timeline</span>
              </div>
              {/* 세로 구분선 */}
              <div className="w-[1px] h-4 bg-gray-200"></div>
              {/* 필터 아이콘 그룹 */}
              <div className="flex space-x-3 ml-5 pb-1 items-center">
                <FilterIcon id="all" icon={FiLayers} label="All" />
                <FilterIcon id="education" icon={FiBookOpen} label="Education" />
                <FilterIcon id="experience" icon={FiStar} label="Experience" />
                <FilterIcon id="career" icon={FiBriefcase} label="Career" />
              </div>
            </div>
  
            {/* 타임라인 레이아웃: [연도 / 선 / 월 + 타이틀] */}
            <div className="relative">
              {/* 세로선: 
                연도(65px) + 기둥 너비의 절반(10px) = 정확히 75px 지점 
              */}
              <div className="absolute left-[75px] top-2 bottom-0 w-[1px] bg-gray-200"></div>
  
              <div className="space-y-16">
                {filteredData.map((yearGroup, idx) => (
                  <div key={idx} className="relative flex items-start">
                    
                    {/* 1. 연도 (Year): 고정 너비 65px */}
                    <div className="w-[65px] font-display text-[15px] font-medium text-[#767676] pt-0.5 text-left">
                      {yearGroup.year}
                    </div>
  
                    {/* 2. 중앙 포인트 기둥 (Center Column): 고정 너비 20px */}
                    {/* 이 기둥 안에서 원은 항상 정중앙(justify-center)에 위치합니다. */}
                    <div className="relative z-10 w-[20px] flex justify-center mt-[7px]">
                      <div className="w-2.5 h-2.5 rounded-full border border-gray-200 bg-white"></div>
                    </div>
  
                    {/* 3. 이벤트 리스트 (Month + Title) */}
                    <div className="flex-1 ml-4 space-y-6">
                      {yearGroup.events.length > 0 ? (
                        yearGroup.events.map((event, eIdx) => (
                          <div key={eIdx} className="flex items-start font-pretendard">
                            <span className="w-16 flex-shrink-0 text-[13px] text-[#d2d2d2] font-medium pt-0.5">
                              {event.date}
                            </span>
                            <span className="text-[15px] text-[#363636] leading-snug">
                              {event.title}
                            </span>
                          </div>
                        ))
                      ) : (
                        activeFilter === 'all' && <div className="h-4"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
  
            </div>
  
            {/* --- Certifications 섹션 --- */}
            <div className="mt-20"> {/* Bio와 충분한 간격 유지 */}
              <h2 className="font-display text-[24px] font-medium text-[#363636] mb-8">Certifications</h2>
              
              <div className="space-y-8">
                {/* 자격증 아이템 리스트 */}
                {[
                  {
                    title: "ADsP (Advanced Data Analytics Semi-Professional)",
                    date: "2025.11",
                    issuer: "K-Data",
                    category: "data"
                  },
                  {
                    title: "Engineer Landscape Architecture",
                    date: "2023.06",
                    issuer: "HRDK",
                    category: "landscape"
                  },
                  {
                    title: "Engineer in Nature Environment and Ecological Restoration",
                    date: "2023.09",
                    issuer: "HRDK",
                    category: "landscape"
                  },
                  {
                    title: "Class 1 Regular Driver's License",
                    date: "-",
                    issuer: "-",
                    category: "general"
                  }
                ].map((cert, idx) => (
                  <div key={idx} className="group">
                      <div className="text-[15px] font-medium text-[#363636] leading-snug mb-1">
                        {cert.title}
                      </div>
                      {cert.date !== "-" && (
                        <div className="text-[13px] text-[#767676] font-pretendard">
                          {cert.date} <span className="mx-2 text-gray-200">|</span> {cert.issuer}
                        </div>
                      )}
                    </div>
                ))}
              </div>
            </div>
              
          </div>
        </div>
      </>
    );
  };
  
  export default AboutSidePeek;