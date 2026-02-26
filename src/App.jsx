import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GNB from './components/GNB';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Contact from './pages/Contact';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-[#363636]">
        {/* 모든 페이지에서 공통으로 보이는 GNB */}
        <GNB />
        
        <main className="pt-30"> {/* GNB 높이를 고려한 여백 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Archive" element={<Archive />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="flex justify-center pt-10">
          <button 
            onClick={scrollToTop}
            className="text-sm text-[#adadad] hover:text-[#363636] tracking-[0.2em] uppercase transition-all duration-300"
          >
            Back to Top
          </button>
        </div>

        <footer className="py-12 border-t border-gray-50">
          <p className="text-center text-[12px] text-[#adadad] tracking-[0.1em] uppercase">
            © 2026 Park Yujin. All rights reserved.
          </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;