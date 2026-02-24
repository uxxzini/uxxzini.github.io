import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FiChevronDown, FiArrowRight } from 'react-icons/fi';


{/* About 컴포넌트 정의 */}
const About = () => {
    const [openFaq, setOpenFaq] = useState(null);
  
    return (
      <section id="about" className="w-full flex flex-col items-center border-t border-gray-50 select-none">
        
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

  export default About;