import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const MoreWork = () => {
  const navigate = useNavigate();

  const projects = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: i % 2 === 0 ? "Landscape Design" : "Data Analysis",
  }));

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    // 전체 섹션을 감싸는 컨테이너
    <section id="more-work" className="w-full flex flex-col items-center border-t border-gray-50">
      
      {/* 2.2 MORE WORK 섹션 헤더 (전체 너비 배경) */}
      <div className="w-full flex flex-col items-center pt-30 pb-8 bg-gray-50/30">
        <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
          MORE WORK
        </h3>
        <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
          Select recent and notable projects
        </p>
      </div>

      {/* 2.3 프로젝트 그리드 리스트 (제한된 너비) */}
      <div className="max-w-[1200px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-30 gap-y-25">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group cursor-pointer relative aspect-square bg-[#f7f7f7] rounded-[2rem] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500" />

              <div className="absolute bottom-8 left-8 right-8 flex flex-col pointer-events-none">
                <h3 className="font-display text-[20px] font-bold text-[#363636] leading-tight mb-1">
                  {project.title}
                </h3>
                <p className="font-pretendard text-[14px] text-[#767676] font-medium opacity-80 uppercase tracking-wider">
                  {project.category}
                </p>
              </div>

              <div className="absolute top-8 right-8 text-[#d2d2d2] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <FiArrowUpRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWork;