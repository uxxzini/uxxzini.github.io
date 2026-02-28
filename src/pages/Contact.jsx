import React, { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

import profileImg from '../assets/message_profile.png';

import instaImg from '../assets/zini.jpg';


import yujinLogo from '../assets/yujin.svg';


const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zini.works.lab@gmail.com";

  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isGithubCtaHovered, setIsGithubCtaHovered] = useState(false);
  const [isYujinHovered, setIsYujinHovered] = useState(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);


  // 2번 카드 (챗봇) 관련 상태
  const [step, setStep] = useState(0); 
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

  // 스크롤 자동 하단 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  const isStarted = useRef(false);
  useEffect(() => {

    if (messages.length > 0) return;
  
    // 타이머 변수를 선언합니다.
    let timer1, timer2, timer3;
  
    timer1 = setTimeout(() => {
      setMessages([{ 
        sender: 'bot', 
        text: "무엇이든 편하게 남겨주세요! (no, for real)" 
      }]);
  
      timer2 = setTimeout(() => {
        setMessages(prev => [...prev, { 
          sender: 'user', 
          text: "좋아요!" 
        }]);
  
        timer3 = setTimeout(() => {
          setMessages(prev => [...prev, { 
            sender: 'bot', 
            text: "반가워요! 먼저 성함(닉네임)이 어떻게 되시나요?" 
          }]);   
          setStep(1);
        }, 1000);
      }, 1000);
    }, 1000);
  
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // 2초 후에 '복사됨' 메시지를 원래대로 돌립니다.
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputValue('');

    // 대화 단계별 봇 응답 로직
    setTimeout(() => {
      if (step === 1) {
        setMessages(prev => [...prev, { sender: 'bot', text: "어떤 이야기를 나누고 싶으신가요?" }]);
        setStep(2);
      } else if (step === 2) {
        setMessages(prev => [...prev, { sender: 'bot', text: "어디로 답장해 드리면 될까요?\n이메일이나 연락처를 남겨주세요!" }]);
        setStep(3);
      } else if (step === 3) {
        setMessages(prev => [...prev, { sender: 'bot', text: "소중한 메시지 감사합니다! 금방 답변 드릴게요." }]);
  
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: 'bot', text: "좋은 하루 보내세요! " }]);
          setStep(4);
        }, 1000);
  
        console.log("전송할 데이터:", messages.concat({ sender: 'user', text: userText }));
      }
    }, 1000);
  };

  return (
    <PageLayout>
      {/* 1번 카드 */}
      <Card colSpan="md:col-span-6" aspect="aspect-[2/1]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-medium text-[#363636] mt-2 mb-10 tracking-tight">
              Let’s build something new.
            </h1>

            <p className="text-[14px] text-[#767676] leading-relaxed">
              경계 없이 생각하고, 함께 최선의 답을 찾아가는 과정을 좋아합니다.<br />
              AI, 공간, 조경, 데이터... 모든 새로운 도전에 늘 열려 있습니다.<br /><br />
              어떤 이야기든 환영합니다. (✿◡‿◡)
              
              {/* 문장 바로 오른쪽에 배치되는 복사 버튼 */}
              <button
                onClick={handleCopy}
                className="ml-3 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e5e5e5] rounded-full hover:border-[#363636] transition-all duration-300 group relative"
              >
                <span className="text-[13px] font-medium text-[#363636]">{email}</span>
                {/* 복사 아이콘 (SVG) */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#adadad] group-hover:text-[#363636]">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>

                {/* 복사 완료 피드백 툴팁 */}
                {copied && (
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#363636] text-white text-[10px] rounded animate-pulse">
                    Copied!
                  </span>
                )}
              </button>
            </p>
          </div>

          <div className="flex items-center gap-2.5 mt-8">
            <div className="w-2.5 h-2.5 bg-[#22c55e] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
            <span className="text-[13px] font-medium text-[#adadad] tracking-wide">
              Open to conversations
            </span>
          </div>
        </div>
      </Card>

      {/* 2번 카드: iMessage Chat Card */}
      <Card colSpan="md:col-span-6" aspect="aspect-[2/1]" className="overflow-hidden flex flex-col border-none">
        {/* 채팅 영역 */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-2 flex flex-col gap-3 scrollbar-hide"
        >
          {/* 상단 날짜 */}
          <div className="flex justify-center mb-0">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium text-[#adadad] uppercase tracking-widest">
                {/* 오늘 요일과 날짜 자동 호출 */}
                Today {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
              </span>
            </div>
          </div>

          {messages.map((msg, index) => {
          // 이전 메시지와 발신자가 같은지 확인하는 변수
          const isSameSender = index > 0 && messages[index - 1].sender === msg.sender;

          return (
            <div 
              key={index} 
              // 연속된 메시지면 위 간격을 살짝 줄여서(mt-[-8px]) 한 그룹처럼 보이게 합니다.
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start items-start gap-2'} ${isSameSender ? 'mt-[-8px]' : 'mt-0'}`}
            >
              {/* 프로필 사진 영역 */}
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 shrink-0 mt-1">
                  {/* 연속된 메시지가 아닐 때만 사진을 보여줍니다. */}
                  {!isSameSender ? (
                    <div className="w-full h-full rounded-full bg-[#adadad] overflow-hidden">
                      <img 
                        src={profileImg} 
                        alt="profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // 연속된 메시지면 빈 공간만 남겨서 말풍선 줄을 맞춥니다.
                    <div className="w-full h-full" />
                  )}
                </div>
              )}

              <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {/* 이름: 연속된 메시지가 아닐 때만 표시 */}
                {msg.sender === 'bot' && !isSameSender && (
                  <span className="text-[11px] text-[#adadad] ml-1 mb-1 font-medium">
                    Yujin
                  </span>
                )}

                {/* 말풍선 디자인 */}
                <div 
                  className={`max-w-[100%] px-4 py-2.5 text-[14px] leading-snug shadow-sm whitespace-pre-wrap break-keep ${
                    msg.sender === 'user' 
                      ? 'bg-[#363636] text-white rounded-[20px] rounded-tr-[4px]' 
                      : 'bg-white text-[#363636] rounded-[20px] rounded-tl-[4px]'
                  }`}
                >
                  {msg.text}
                </div>
                
                {/* 전송 상태 표시: 유저의 마지막 메시지에만 표시 */}
                {msg.sender === 'user' && index === messages.length - 1 && (
                  <span className="text-[10px] text-[#8e8e93] mt-1 mr-1">전송됨</span>
                )}
              </div>
            </div>
          );
        })}
        </div>

        {/* 입력창 */}
        <form 
          onSubmit={handleSendMessage}
          className="pt-2 backdrop-blur-md flex items-center gap-2"
        >
          <div className="flex-1 bg-white border border-[#e5e5ea] rounded-full px-4 py-1.5 flex items-center shadow-sm">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message"
              className="flex-1 bg-transparent text-[14.5px] focus:outline-none placeholder-[#bcbcbf]"
              disabled={step === 4}
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim() || step === 4}
              className="w-7 h-7 flex items-center justify-center bg-[#363636] text-white rounded-full disabled:bg-[#e5e5ea] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 7-7 7 7M12 19V5"/>
              </svg>
            </button>
          </div>
        </form>
      </Card>

      {/* 3번 카드: LinkedIn Profile Card (보더 및 정렬 보정 버전) */}
      <Card 
        colSpan="col-span-6 md:col-span-3" 
        aspect="aspect-[1/1]" 
        className={`relative overflow-hidden flex items-center justify-center transition-all duration-500 p-0 border
          ${isLinkedinHovered ? 'border-[#0077b5]' : 'border-[#e5e5e5]'}`}
      >
        {/* 배경 div */}
        <div 
          className={`absolute inset-0 transition-colors duration-500 z-0
            ${isLinkedinHovered ? 'bg-white' : 'bg-[#B4E5F1]'}`} 
        />

        <a 
          href="https://www.linkedin.com/in/yujin-park-6a51233b4/" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setIsLinkedinHovered(true)}
          onMouseLeave={() => setIsLinkedinHovered(false)}
          className="w-full h-full flex flex-col items-center justify-center relative z-10"
        >

          <div className={`absolute top-0 right-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500
            ${isLinkedinHovered ? 'border-[#0077b5] text-[#0077b5]' : 'border-white text-white'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>

          <span className={`text-[150px] font-bold tracking-tighter transition-colors duration-500 leading-none transform translate-y-[-8px]
            ${isLinkedinHovered ? 'text-[#0077b5]' : 'text-white'}`}>
            in
          </span>

        </a>
      </Card>


      {/* 4번 카드: Instagram Profile Card (기준점) */}
      <Card 
        colSpan="col-span-6 md:col-span-3" 
        aspect="aspect-[1/1]" 
        className="p-5 flex flex-col justify-between relative overflow-hidden group"
      >
        <div 
          className={`absolute top-0 right-0 transition-all duration-500 ease-in-out z-0
            ${isCtaHovered ? 'w-full h-full mt-0 mr-0 rounded-none' : 'w-9 h-9 mt-6 mr-6 rounded-xl'}`}
          style={{ background: '#363636' }}
        />

        <div className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center z-10 pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>

        {/* 4번 카드 상단 콘텐츠 묶음 */}
        <div className="z-10 relative pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#adadad]">
              <img src={instaImg} alt="YUJIN" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`text-[13px] font-bold transition-colors duration-300 ${isCtaHovered ? 'text-white' : 'text-[#363636]'}`}>
                YUJIN 
              </span>
              <span className={`text-[11px] transition-colors duration-300 ${isCtaHovered ? 'text-white/70' : 'text-[#adadad]'}`}>
                @zini.works
              </span>
            </div>
          </div>
          <p className={`mt-8 text-[15px] leading-relaxed font-medium transition-colors duration-300 ${isCtaHovered ? 'text-white/90' : 'text-[#363636]'}`}>
            cooking up nature on AI ✶ spatial curator ✶ digital pixels
          </p>
        </div>

        <a 
          href="https://www.instagram.com/zini.works" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setIsCtaHovered(true)}
          onMouseLeave={() => setIsCtaHovered(false)}
          className={`w-full py-2.5 border rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 z-10 relative
            ${isCtaHovered ? 'bg-white/10 border-white/20 text-white backdrop-blur-sm' : 'bg-white border-[#e5e5ea] text-[#363636] shadow-sm hover:bg-[#efeff4]'}`}
        >
          <span className="text-[12px] font-bold">Explore archive</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </Card>

      {/* 5번 카드: GitHub Digital Garden (3번과 구조 동기화) */}
      <Card 
        colSpan="col-span-6 md:col-span-3" 
        aspect="aspect-[1/1]" 
        className="p-5 flex flex-col justify-between bg-white border border-[#e5e5e5] relative overflow-hidden group"
      >
        {/* 5번 카드 상단 콘텐츠 묶음 (4번과 동일한 래퍼 구조) */}
        <div className="z-10 relative">
          <div className="flex justify-between items-start mb-4"> {/* mb-6에서 4로 조정하여 3번과 높이감 맞춤 */}
            <div>
              <h3 className="text-[14px] font-bold text-[#363636] flex items-center gap-1.5">
                Digital Garden 
                <span className="text-[10px] font-normal text-[#adadad] uppercase tracking-wider">GitHub</span>
              </h3>
              <p className="text-[11px] text-[#adadad]">planting codes, harvesting spaces</p>
            </div>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-[#363636] scale-110 mt-0 ">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>

          {/* ✨ 잔디 크기 조절: max-w와 px-2를 추가하여 그리드 사이즈를 줄임 */}
          <div className="max-w-[220px] mx-auto px-2 grid grid-cols-12 gap-1 w-full opacity-80 group-hover:opacity-100 transition-opacity">
                {[...Array(84)].map((_, i) => {
                  const level = Math.floor(Math.random() * 5);
                  const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']; // 더 사실적인 잔디 색상 적용
                  return (
                    <div 
                      key={i} 
                      className="aspect-square rounded-[1.5px] transition-colors duration-300" 
                      style={{ backgroundColor: colors[level] }} 
                    />
                  );
                })}
              </div>
            </div>

        <a 
          href="https://github.com/uxxzini" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => setIsGithubCtaHovered(true)}
          onMouseLeave={() => setIsGithubCtaHovered(false)}
          className={`w-full py-2.5 border rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 z-10 relative
            ${isGithubCtaHovered 
              ? 'bg-[#363636] border-[#363636] text-white' 
              : 'bg-white border-[#e5e5ea] text-[#363636] shadow-sm hover:bg-[#efeff4]'}`}
        >
          <span className="text-[12px] font-bold">Explore repositories</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </Card>
      
      {/* 5번 카드: Identity Signature Card (색감 복구 버전) */}
      <Card 
        colSpan="col-span-6 md:col-span-3" 
        aspect="aspect-[1/1]" 
        className="relative overflow-hidden bg-white border border-[#e5e5e5]" 
        onMouseEnter={() => setIsYujinHovered(true)}
        onMouseLeave={() => setIsYujinHovered(false)}
      >
        {/* ✨ SVG 배치: 투명도 제거 */}
        <div className="absolute inset-0 flex items-center justify-center p-0">
          <img 
            src={yujinLogo} 
            alt="Yujin Identity" 
            className={`w-full h-full object-contain transition-all duration-700 ease-in-out
              ${isYujinHovered ? 'scale-105 rotate-[-1deg]' : 'scale-100'}`} 
          />
        </div>

        {/* 카드 내부 라벨 */}
        <div className="absolute bottom-7 inset-x-0 z-10 flex justify-center pointer-events-none">
          <span className={`text-[10px] font-bold tracking-widest transition-colors duration-300 ${isYujinHovered ? 'text-[#363636]' : 'text-[#adadad]'}`}>
            Cooked by YUJIN ✶ 2026
          </span>
        </div>
      </Card>

    </PageLayout>
  );
};

export default Contact;