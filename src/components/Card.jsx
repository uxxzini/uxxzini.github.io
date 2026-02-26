import React from 'react';

// children: 카드 내부에 들어갈 내용
// colSpan: 12컬럼 중 차지할 칸수 (기본값: 전체)
// aspect: 가로세로 비율 (기본값: 자동)
// className: 추가적인 스타일이 필요할 때 사용
const Card = ({ children, colSpan = "col-span-12", aspect = "aspect-auto", className = "" }) => {
  return (
    <div className={`
      ${colSpan} 
      ${aspect} 
      bg-[#f7f7f9] 
      rounded-[20px] 
      py-6
      px-7
      border border-[#f0f0f0] 
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
