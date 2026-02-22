/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // 제목용 (Montserrat) - 'font-display' 클래스로 사용
          display: ['Montserrat', 'sans-serif'],
          // 내용용 (Pretendard) - 'font-pretendard' 클래스로 사용
          pretendard: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }