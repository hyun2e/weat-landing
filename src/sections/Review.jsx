import React from "react";
import Button from "../components/Button";
import Card_review from "../components/Card_review";
import styled from "styled-components";

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 40px;
`
const ReviewTitle = styled.h2`
  line-height: 1.5;
`

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  width: 588px;
  align-items: center;
`;

const CardListContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`

function Review() {
  // 리뷰 데이터 배열
  const reviews = [
    {
      chip: "다이어트",
      chip2: "비건.채식",
      date: "25.01.14",
      title: "퍼맨츠 가지요리 너무 존맛",
      content:
        "채식주의 식단을 하고 있지는 않지만, 비건이 아닌 음식들과 비교해도 맛있어요! 친구와 신년모임으로 오랜만에 만났는데 요즘 소화가 잘 안됐는데 ···",
      likeIcon: "src/assets/images/Heart_gray_little.svg",
      likeCount: 36,
      ChatIcon: "src/assets/images/ChatCircleDots.svg",
      ChatCount: 11,
      BookMarkIcon: "src/assets/images/BookmarkSimple.svg",
      image: "src/assets/images/review1.png",
    },
    {
      chip: "저탄고지",
      chip2: "다이어트",
      date: "25.12.19",
      title: "요거트 볼 맛집 플러디 강추",
      content:
        "요거트는 담백하고 건강한 맛이라 자주 찾는 편인데, 여기 요거트는 진짜 최고였어요! 🥄 처음 한입 먹자마자 부드러움과 은은한 단맛이 퍼지는 게 ···",
      likeIcon: "src/assets/images/Heart_gray_little.svg",
      likeCount: 0,
      ChatIcon: "src/assets/images/ChatCircleDots.svg",
      ChatCount: 18,
      BookMarkIcon: "src/assets/images/BookmarkSimple.svg",
      image: "src/assets/images/review2.png",
    },
    {
      chip: "저속노화",
      chip2: "비건.채식",
      date: "25.01.14",
      title: "포케맛집 ㅇㅈ",
      content:
        "요즘 속이 좀 예민해서 가벼운 음식이 땡겼는데, 포케가 딱이었어요! 신선한 재료들이 가득해서 한입 한입 먹을 때마다 상쾌한 느낌",
      likeIcon: "src/assets/images/Heart_gray_little.svg",
      likeCount: 9,
      ChatIcon: "src/assets/images/ChatCircleDots.svg",
      ChatCount: 11,
      BookMarkIcon: "src/assets/images/BookmarkSimple.svg",
      image: "src/assets/images/review3.png",
    },
    {
      chip: "고단백",
      chip2: "다이어트",
      date: "25.01.26",
      title: "마파 두부 알싸한 맛",
      content:
        "평소 마파두부를 좋아하는 편이라 기대하면서 방문했는데, 기대 이상이었어요! 비건은 아니지만, 가끔 두부 요리를 찾곤 하는데, 여기 마파두부는 ···",
      likeIcon: "src/assets/images/Heart_gray_little.svg",
      likeCount: 21,
      ChatIcon: "src/assets/images/ChatCircleDots.svg",
      ChatCount: 11,
      BookMarkIcon: "src/assets/images/BookmarkSimple.svg",
      image: "src/assets/images/review4.png",
    },
  ];

  return (
    <ReviewContainer>
      {/* 페이지 제목 */}
      <ReviewTitle>사용자들과 생생하고 신뢰도 높은 <br/> 리뷰를 공유해보세요</ReviewTitle>

      {/* 리뷰 카드 리스트 */}
      <CardListContents>
        <CardListWrapper>
          <Card_review review={reviews[0]} />
          <Card_review review={reviews[1]} />
        </CardListWrapper>
        <CardListWrapper>
          <Card_review review={reviews[2]} />
          <Card_review review={reviews[3]} />
        </CardListWrapper>
      </CardListContents>

      {/* 리뷰 더 보기 버튼 */}
      <Button type="outline-btn" href="/characters">
        리뷰 더 보러가기
      </Button>
    </ReviewContainer>
  );
}

export default Review;
