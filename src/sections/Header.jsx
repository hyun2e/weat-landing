import React from 'react';

const Header = () => {
  return (
    <header className="header">
      //로고
      <div className="logo">
        <img src="/path-to-logo.png" alt="위잇트로고" />
      </div>

      //네비게이션
      <nav className="nav-menu">
        <ul>
          <li><a href="/about">위잇트 소개</a></li>
          <li><a href="/community">커뮤니티</a></li>
          <li><a href="/challenge">챌린지</a></li>
          <li><a href="/download">다운로드</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
