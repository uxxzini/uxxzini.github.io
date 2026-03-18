import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

const Archive = () => {
  const categories = [
    'All',
    'AI & Data Analytics',
    'Landscape & Spatial Design'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const archiveData = [
    { title: "르노코리아 인턴십", description: "글로벌 기업 실무 환경에서의 데이터 관리 및 비즈니스 프로세스 최적화 경험", category: "AI & Data Analytics", image: "" },
    { title: "이미지 유사도 기반 가방 추천 시스템", description: "컴퓨터 비전 기술을 활용한 개인 맞춤형 패션 아이템 추천 알고리즘 개발", category: "AI & Data Analytics", image: "" },
    { title: "여수광양항 AI 혁신제안", description: "대국민 공모 당선작, 항만 물류 효율화를 위한 인공지능 혁신 아이디어 도출", category: "AI & Data Analytics", image: "" },
    { title: "인공지능 기반 축제 안전관리 플랫폼", description: "인파 밀집도 예측 및 실시간 위험 감지를 위한 AI 솔루션 기획", category: "AI & Data Analytics", image: "" },
    { title: "해양 기상 변수에 따른 어획량 분석 및 예측 모델", description: "기상청 데이터를 활용한 머신러닝 기반 어획량 변동성 예측 연구", category: "AI & Data Analytics", image: "" },
    { title: "딥페이크 범죄 대응을 위한 AI 탐지 모델", description: "시각적 이상 패턴을 분석하여 합성 이미지를 식별하는 AI 탐지 시스템 구축", category: "AI & Data Analytics", image: "" },
    { title: "Plotxbloom", description: "조경 데이터 베이스 및 인사이트를 공유하는 개인 브랜드 웹 애플리케이션", category: "AI & Data Analytics", image: "" },
    { title: "라온 가든스케이프 웹페이지 UX/UI 및 구축", description: "조경 설계 회사의 디지털 쇼룸, 모던한 UX/UI 설계 및 프론트엔드 개발", category: "AI & Data Analytics", image: "" },
    { title: "2026 서울국제정원박람회 시민동행정원", description: "젊은 조경가들 대표 출전, 도시와 자연이 공존하는 파빌리온 공간 설계", category: "Landscape & Spatial Design", image: "" },
    { title: "2022 대한민국 정원산업 박람회 반짝(pop-up)정원", description: "한국수목원정원관리원장상 당선작, '정(情)류장: 마음을 기다리는 곳' 기획 및 시공", category: "Landscape & Spatial Design", image: "" },
    { title: "정원드림프로젝트", description: "산림청 주관 실무형 시공 프로젝트, 전통과 현대가 어우러진 '유생의 여정' 정원 조성", category: "Landscape & Spatial Design", image: "" },
    { title: "학사 졸업작품전", description: "조경 및 도시공학적 관점을 융합한 공간 설계 프로젝트", category: "Landscape & Spatial Design", image: "" },
    { title: "공공기관 근무", description: "생활밀착형 숲 조성 사업 운영 및 135억 규모의 공간 조성 데이터 구조화 실무", category: "Landscape & Spatial Design", image: "" },
    { title: "현장실습", description: "현장실습이요오", category: "Landscape & Spatial Design", image: "" },
    { title: "응용생태연구실(A.E.Lab) 및 현장 실습", description: "부산 태종대 식생 조사 등 다수의 생태 보전 연구 및 공간 설계 실무 보조 참여", category: "Landscape & Spatial Design", image: "" }
  ];

  const filteredData = activeCategory === 'All' 
    ? archiveData 
    : archiveData.filter(item => item.category === activeCategory);

  return (
    <PageLayout>
      
      <div className="col-span-12 xl:fixed xl:left-8 2xl:left-[8%] xl:top-35 z-20 mb-8 xl:mb-0 xl:w-56">
        {/* 모바일 가로 스크롤 대비 디자인 */}
        <div className="flex flex-row xl:flex-col gap-2 xl:gap-4 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 text-left px-3 py-1.5 xl:px-0 xl:py-0 text-[12px] md:text-[12px] leading-[1.4] transition-all duration-200 rounded-full xl:rounded-none ${
                activeCategory === cat 
                  ? 'bg-[#1d1d1f] xl:bg-transparent text-white xl:text-[#363636] font-bold xl:border-l-2 xl:border-[#1d1d1f] xl:pl-3' 
                  : 'bg-[#f5f5f5] xl:bg-transparent text-[#86868b] font-medium hover:text-[#363636] xl:border-l-2 xl:border-transparent xl:pl-3'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      {filteredData.map((item) => (
        <Link 
          key={item.title} 
          to={`/archive/${encodeURIComponent(item.title)}`} 
          className="col-span-12 md:col-span-4 block group"
        >
          <Card 
            colSpan="h-full" 
            aspect="aspect-[1/1]"
            className="!py-2 !px-4 flex flex-col hover:border-[#adadad] transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
          >
            {/* 1. 상단 텍스트 섹션 */}
            <div className="p-2 pb-3 flex flex-col gap-0.5 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-[14px] md:text-[15px] font-bold text-[#1d1d1f] tracking-tight truncate pr-7">
                  {item.title}
                </h3>
                <div className="absolute top-3 right-3 text-[#adadad] group-hover:text-[#1d1d1f] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              <p className="text-[12px] text-[#86868b] font-medium truncate">
                {item.description}
              </p>
            </div>

            {/* 2. 구분선 */}
            <div className="px-2">
              <div className="w-full h-[1px] bg-[#f2f2f2]" />
            </div>

            {/* 3. 이미지 섹션 */}
            <div className="flex-1 mt-3 mx-4 mb-4 bg-[#fcfcfc] rounded-lg overflow-hidden relative border border-[#f5f5f5]">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[#adadad] font-bold text-[9px] uppercase tracking-[0.2em]">
                  No Preview
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300" />
            </div>
          </Card>
        </Link>
      ))}
      
    </PageLayout>
  );
};

export default Archive;