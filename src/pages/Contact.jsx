import React, { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import Card from '../components/Card';

import profileImg from '../assets/message_profile.png';


const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zini.works.lab@gmail.com";

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


  const isStarted = useRef(false); //

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

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

       <Card colSpan="col-span-3" aspect="aspect-[1/1]">
       </Card>

    </PageLayout>
  );
};

export default Contact;