import React from "react";
import Chip from "../components/Chip";
import styled from "styled-components";

/* 카드 외부 타이틀 */
const CardTitle = styled.h2`
  text-align: center; /* ✅ 카드 바깥 타이틀 중앙 정렬 */
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.5;
`;

/* 카드 컨테이너 */
const CardContainer = styled.div`
  width: 276px;
  background: white;
  border-radius: 18px;
  box-shadow: -1px 6px 16px rgba(131, 131, 131, 0.25);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  margin: 0 auto; /* ✅ 카드 중앙 정렬 */
  /* Hover effect to scale the card */
  &:hover {
    transform: scale(1.1); /* 1.1배 확대 */
  }
  /* ✅ 미디어 쿼리: 모바일에서는 호버 제거 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* ✅ 모바일에서는 호버 효과 제거 */
    &:hover {
      transform: none; /* 확대 효과 제거 */
    }
  }
`;

/* 카드 내부 텍스트 영역 */
const CardWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: left; /* ✅ 카드 내부 텍스트 좌측 정렬 */

`;

/* 카드 이미지 */
const CardImage = styled.div`
  width: 100%;
  height: 192px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* 카드 헤더 (칩 + 날짜) */
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* ✅ 좌측 정렬 */
  flex-wrap: wrap;
  font-size: 12px;
  color: #808080;
  gap: 5px;
`;

/* 카드 본문 */
const CardBody = styled.div`
  margin-top: 10px;

  .card-title {
    font-size: 20px;
    font-weight: bold;
    color: #1a1a1a;
    word-wrap: break-word;
    white-space: normal;
  }

  .card-content {
    font-size: 12px;
    color: #666666;
    margin-top: 4px;
    line-height: 1.5;
    word-wrap: break-word;
    white-space: normal;
  }
`;

/* 카드 푸터 */
const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start; /* ✅ 좌측 정렬 */
  align-items: center;
  margin-top: 13px;
  font-size: 14px;
  color: #808080;
  gap: 11px;
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Card_review = ({ review }) => {
  return (
    <>
      {/* 카드 외부 타이틀 (가운데 정렬) */}
      {/* <CardTitle>{review.mainTitle}</CardTitle> */}

      <CardContainer>
        {/* 카드 */}
        <CardWrapper>
          {/* 카드 헤더 */}
          <CardHeader>
            <Chip>{review.chip}</Chip>
            <Chip>{review.chip2}</Chip>
            <p>{review.date}</p>
          </CardHeader>

          {/* 카드 바디 */}
          <CardBody>
            <p className="card-title">{review.title}</p>
            <p className="card-content">{review.content}</p>
          </CardBody>

          {/* 카드 푸터 */}
          <CardFooter>
            <CardIcon>
              <img src={review.likeIcon} alt="like" />
              <p>{review.likeCount}</p>
            </CardIcon>
            <CardIcon>
              <img src={review.ChatIcon} alt="chat" />
              <p>{review.ChatCount}</p>
            </CardIcon>
            <CardIcon>
              <img src={review.BookMarkIcon} alt="bookmark" />
            </CardIcon>
          </CardFooter>
        </CardWrapper>

        {/* 이미지 */}
        <CardImage>
          <img src={review.image} alt="restaurant" />
        </CardImage>
      </CardContainer>
    </>
  );
};

export default Card_review;
