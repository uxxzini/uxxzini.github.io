import React from 'react';
import { FiInstagram, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { PiFlowerDuotone, PiArchive } from 'react-icons/pi';

const Contact = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('zini.works.lab@gmail.com');
    alert('Email address copied!');
  };

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/uxxzini', icon: <FiGithub /> },
    { name: 'Instagram', url: 'https://www.instagram.com/uuu.zini.eee/', icon: <FiInstagram /> },
    { name: 'Blog', url: 'https://blog.naver.com/yjin5268', icon: <PiArchive /> },
    { name: 'Business', url: '#', icon: <PiFlowerDuotone /> },
  ];

  return (
    <section id="contact" className="w-full border-t border-gray-50">
      {/* 섹션 헤더 */}
      <div className="w-full flex flex-col items-center pt-30 pb-8 bg-gray-50/30">
        <h3 className="font-display text-[36px] font-[900] text-[#363636] leading-none tracking-tighter uppercase mb-2">
          CONTACT
        </h3>
        <p className="font-pretendard text-[14px] font-[500] text-[#363636]">
          Let’s plant a seed for our next collaboration
        </p>
      </div>

      {/* 컨택트 카드 컨테이너 */}
      <div className="max-w-[1200px] mx-auto px-8 w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          
          {/* 왼쪽: 이메일 카드 */}
          <div className="bg-[#f7f7f7] rounded-[2rem] p-10 flex flex-col">
            <h3 className="font-display text-[24px] font-medium text-[#363636] mb-8 leading-tight">
              Growing Ideas into Reality !
            </h3>
            <div className="max-w-[600px]">
              <p className="font-pretendard text-[16px] text-justify leading-snug text-[#767676]">
                Currently, I am solidifying my unique brand through a garden-centered side project.
                I value the power of collaboration and am always open to new opportunities at{' '}
                <span 
                  className="allow-select font-[500] text-[#363636] underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors"
                  onClick={handleCopyEmail}
                >
                  zini.works.lab@gmail.com
                </span>
                {'. '}
                <br />
                I look forward to growing and innovating together with you.
              </p>
            </div>
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

          {/* 오른쪽: Elsewhere 소셜 카드 */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col">
            <h3 className="font-display text-[24px] font-medium text-[#363636] mb-8 leading-tight">
              Elsewhere
            </h3>
            <div className="grid grid-cols-2 gap-x-8">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
  );
};

export default Contact;