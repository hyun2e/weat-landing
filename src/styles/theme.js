export const theme = {
  colors: {
    white: "#ffffff", // 배경색
    primary: "#FF5D00", // 주요 색상 (orange)
    primary100: "#FFDFCC", // 화이트 버튼 호버
    primary200: "#FFBE99", // 주요 색상의 밝은 버전
    primary600: "#CC4A00", // 주요 색상 버튼 호버

    secondary: "#00A980", // 보조 색상 (green)
    secondary700: "#007559", // 보조 색상 버튼 호버

    grey900: "#1A1A1A", // 타이틀 색상
    grey600: "#666666", // 본문
    grey500: "#808080", // 리뷰 캡션
    grey250: "#CCCCCC", // 푸터 본문
    grey100: "#F2F2F2", // 푸터 탭
  },
  fonts: {
    main: "'Pretendard', sans-serif",
    // 필요한 다른 폰트들...
  },
  fontSizes: {
    10: "0.625rem", // review label 
    11: "0.6875rem", // pet level body
    12: "0.75rem", // review body
    14: "0.875rem", // review cap
    16: "1rem", // body, mobile hero body, button
    18: "1.125rem", // button, header
    20: "1.25rem", // review title
    22: "1.375rem", // mobile hero title
    24: "1.5rem", // subtitle
    26: "1.625rem", // pc hero body
    28: "1.75rem", // title 
    32: "2rem", // pc hero title
    // 필요한 다른 크기들...
  },
  // 모바일 기준: 화면 폭이 768px 이하이면 모바일로 간주
  breakpoints: {
    mobile: "768px",
  },
  // 추가적인 디자인 변수들...
};
