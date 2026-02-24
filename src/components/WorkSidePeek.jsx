import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiX, FiArrowUpRight } from 'react-icons/fi';

const WorkSidePeek = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 현재 URL이 /project/숫자 형태인지 확인하여 패널 오픈 여부 결정
  const isProjectOpen = location.pathname.startsWith('/project/');
  const projectId = isProjectOpen ? location.pathname.split('/').pop() : null;

  const closePeek = () => navigate('/');

  return (
    <>
      {/* 1. 배경 오버레이 (클릭 시 닫힘) */}
      <div 
        className={`fixed inset-0 bg-black/10 z-[100] transition-opacity duration-500 ${
          isProjectOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closePeek}
      />

      {/* 2. 사이드 패널 컨텐츠 */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[650px] bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-out p-12 overflow-y-auto ${
          isProjectOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 닫기 버튼 */}
        <button 
          onClick={closePeek} 
          className="absolute top-8 right-8 text-2xl text-gray-400 hover:text-black transition-colors"
        >
          <FiX />
        </button>

        {/* 프로젝트 내용 영역 */}
        <div className="mt-12">
          <p className="font-pretendard text-[14px] font-bold text-green-600 uppercase tracking-widest mb-2">
            Project Index #{projectId}
          </p>
          
          {/* 제목 Placeholder */}
          <h2 className="font-display text-[32px] font-[900] text-[#363636] leading-tight mb-8">
            Preparing for <br /> Groundbreaking Designs
          </h2>

          {/* 메인 이미지 Placeholder */}
          <div className="aspect-video bg-[#f7f7f7] rounded-[2rem] mb-10 flex items-center justify-center text-gray-300 font-pretendard border border-gray-100">
            [ Project Feature Image ]
          </div>

          {/* 텍스트 설명 영역 */}
          <div className="space-y-6">
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-display text-[18px] font-bold text-[#363636] mb-3">Overview</h4>
              <p className="font-pretendard text-[16px] text-[#767676] leading-relaxed text-justify">
                유진님의 소중한 프로젝트 상세 내용이 곧 이곳에 담길 예정입니다. 
                조경 설계의 컨셉, 사용된 식재 리스트, 혹은 데이터 분석 과정 등을 
                이미지와 함께 정갈하게 배치할 수 있습니다.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-display text-[18px] font-bold text-[#363636] mb-3">Key Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Rhino 3D', 'Grasshopper', 'Python', 'React'].map(tech => (
                  <span key={tech} className="px-4 py-1.5 bg-gray-50 rounded-full text-[13px] text-[#767676] border border-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSidePeek;