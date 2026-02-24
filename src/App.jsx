import React, { useState } from 'react';

import { useLocation, useNavigate, Link } from 'react-router-dom';

import { FiInstagram, FiGithub, FiArrowUpRight, FiChevronDown, FiArrowRight, FiX, FiBookOpen, FiStar, FiBriefcase, FiLayers } from 'react-icons/fi';
import { PiFlowerDuotone, PiArchive } from 'react-icons/pi';

{/* About 컴포넌트 정의 */}
const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="about" className="w-full flex flex-col items-center pt-20 border-t border-gray-50 select-none">
      
      {/* 섹션 헤더 */}
      <div className="w-full flex flex-col items-center pt-30 pb-8 bg-gray-50/30">
          <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
            ABOUT
          </h3>
          <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
            Merging landscape architecture with data-driven insights
          </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 w-full">
        
        {/* --- 1. INTRO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 items-start mb-12">
          {/* 사진 영역 */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] bg-[#f7f7f7] rounded-[2rem] overflow-hidden">
              {/* 이미지 경로를 실제 파일로 교체하세요 */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-pretendard">
                [Profile Image or Garden Visualization]
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[32px] font-medium text-[#363636] leading-tight mb-8 mt-2">
              I bridge the gap between <br />
              <span>spatial aesthetics</span> and <span>data-driven analytics.</span>
            </h2>
            <p className="font-pretendard text-[18px] font-medium text-[#767676] leading-relaxed mb-8 text-justify">
            Combining landscape architecture with big data analysis, I interpret spatial aesthetics through objective metrics. 
            My mission is to move beyond traditional design to build 'data-driven spatial solutions' that integrate environmental insights and user-centric data.
            </p>
            <ul className="space-y-4 font-pretendard text-[18px] text-[#767676]">
              <li className="flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#767676]" />
                Precision spatial planning that transforms site constraints into strategic opportunities.
              </li>
              <li className="flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#767676]" />
                High-fidelity 3D rendering visualizing real-world data with precision.
              </li>
              <li className="flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#767676]" />
                [In Progress] Developing data-driven planting recommendation algorithms.
              </li>
            </ul>
            <Link 
              to="/about" 
              className="inline-flex items-center mt-10 font-display text-[18px] font-bold text-[#363636] 
              group hover:underline decoration-1 underline-offset-4 transition-all cursor-pointer"
            >
              Read More 
              <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* --- 2. CAPABILITIES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-gray-100 py-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-[24px] font-medium text-[#363636] tracking-tighter">Capabilities</h3>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-3">
            {[ "Landscape Architect", "3D Rendering", "Collaborative Mindset",
            "EDA", "Database Management", "Self-Motivated", "AI Planner",
            "Algorithmic Design","Flexible Communicator", "Web Design"
            ].map((skill) => (
              <span 
                key={skill} 
                className="px-7 py-3 border border-gray-200 rounded-full font-pretendard text-[20px] text-[#363636] 
                hover:border-[#767676] hover:text-[#767676] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* --- 3. FAQs --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-gray-100 pt-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-[24px] font-medium text-[#363636] tracking-tighter">FAQs</h3>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {[
              {
                q: "How are landscape architecture and data connected?",
                a: "I view gardens not just as aesthetic spaces, but as complex datasets of climate, soil, and plant life cycles. By analyzing these variables quantitatively, I design 'Data Gardens' that improve plant survival rates and provide optimized spatial experiences for users."
              },
              {
                q: "What is your current side project?",
                a: "I am building a comprehensive garden plant database and developing a web service that recommends optimal plant combinations. My mission is to empower anyone to cultivate their own perfect garden through objective data, regardless of their level of professional landscape expertise."
              },
              {
                q: "What tools do you use for data-driven projects?",
                a: "I utilize SQL, QGIS, and Python for data collection and analysis, and React.js for building interactive platforms. Additionally, I integrate high-fidelity 3D rendering to translate data-driven insights into realistic spatial designs."
              },
              {
                q: "Are you open to collaboration or freelance opportunities?",
                a: "Absolutely. I am open to various forms of collaboration, ranging from data analysis to 3D rendering. I enjoy projects that require both aesthetic sensibility and logical analysis, and I especially welcome challenging projects that bridge spatial experience with technology."
              },
              {
                q: "What is your availability and work style?",
                a: "I am generally available every weekday via Slack and open to Zoom/in-person meetings on Mondays, Wednesdays, and Fridays. I prefer results-oriented collaboration; rather than strictly tracking hours, I focus on establishing clear weekly or monthly milestones and delivering high-quality results on schedule."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#f9f9f9] rounded-[1.5rem] overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-pretendard text-[20px] text-[#363636]">{faq.q}</span>
                  <FiChevronDown className={`text-xl transition-transform duration-500 ${openFaq === index ? 'rotate-180 text-[#767676]' : 'text-[#767676]]'}`} />
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'pb-8 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="font-pretendard text-[16px] text-[#767676] text-justify leading-snug border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


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
        <div className="w-full flex flex-col items-center pt-30 bg-gray-50/30">
          <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
            MORE WORK
          </h3>
          <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
            Select recent and notable projects
          </p>
        </div>
      </section>


      {/* --- 3. ABOUT SECTION --- */}

      {/* 선언한 About 컴포넌트를 태그 형태로 호출만 합니다 */}
      <About />


      {/* --- 4. CONTACT SECTION --- */}
      <section id="contact" className="w-full border-t border-gray-50">

        <div className="w-full flex flex-col items-center pt-30 pb-8 bg-gray-50/30">
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
                  Currently, I am solidifying my unique brand through a garden-centered side project.
                  I value the power of collaboration and am always open to new opportunities at{' '}
                  <span 
                    className="allow-select font-[500] text-[#363636] underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText('zini.works.lab@gmail.com');
                      alert('Email address copied!');
                    }}
                  >
                    zini.works.lab@gmail.com
                  </span>
                  {'. '}
                  <br />
                  I look forward to growing and innovating together with you.
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

      {/* 여기에 추가: 어떤 섹션에도 속하지 않고 화면 전체를 덮어야 하므로 가장 아래에 둡니다 */}
      <AboutSidePeek />
      
    </div>
  );
}

export default App;