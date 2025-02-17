import React from "react";
import Chip from '../components/Chip'; // Chip 컴포넌트 불러오기

const Card_review = ({ review }) => {
  return ( 
  <div className="card">

  {/* 카드 텍스트 부분 */}
  <div className="card-text">
    {/* 카드 헤더: 칩(라벨), 날짜 */}
    <div className="card-header">
    <Chip>{review.chip}</Chip> {/* Chip 컴포넌트 사용 */}
    <Chip>{review.chip2}</Chip>
      <p>{review.date}</p>
    </div>

    {/* 카드 바디: 제목과 내용 */}
    <div className="card-body">
      <p className="card-title">{review.title}</p>
      <p className="card-content">{review.content}</p>
    </div>

    {/* 카드 이미지 */}
    <div className="card-image">
      <img src={review.image} alt="restaurant" />
    </div>

    {/* 카드 푸터: 좋아요, 댓글, 공유 아이콘 */}
    <div className="card-footer">
      <div className="card-icon">
        <img src={review.likeIcon} alt="like" />
        <p>{review.likeCount}</p>
      </div>
      <div className="card-icon">
        <img src={review.ChatIcon} alt="chat" />
        <p>{review.ChatCount}</p>
      </div>
      <div className="card-icon">
        <img src={review.BookMarkIcon} alt="bookmark" />
      </div>
    </div>
  </div>
</div>
);
};

export default Card_review;
