import React from "react";
import Card_category from "../components/Card_category";
import styled from "styled-components";

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 40px;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 40px;
  }
`;
const CategoryContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 20px;
  }
`;
const CategoryTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
// 카테고리 제목 스타일
const CategoryTitle = styled.h2`
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs22};
  }
`;
// 카테고리 본문 스타일
const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.grey600};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.fs14};
  }
`;

const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 348px;
    gap: 12px;
  }
`;

const MoBr = styled.span`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: inline;
  }
`;

const PCBr = styled.span`
  display: inline;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Category = () => {
  const categoryDataTop = [
    { icon: "/assets/images/category_diet.svg", text: "다이어트" },
    { icon: "/assets/images/category_meat.svg", text: "저탄고지" },
    { icon: "/assets/images/category_vegan.svg", text: "비건·채식" },
    { icon: "/assets/images/category_protein.svg", text: "고단백" },
    { icon: "/assets/images/category_glutenfree.svg", text: "글루텐프리" },
  ];
  const categoryDataBottom = [
    { icon: "/assets/images/category_zerosugar.svg", text: "저당·제로슈가" },
    { icon: "/assets/images/category_detox.svg", text: "디톡스" },
    { icon: "/assets/images/category_slowaging.svg", text: "저속노화" },
    { icon: "/assets/images/category_less.svg", text: "저염식" },
    { icon: "/assets/images/category_event.svg", text: "EVENT" },
  ];

  return (
    <CategoryContainer>
      <CategoryTextWrapper>
        <CategoryTitle>
          다양한 건강 카테고리에 맞춰 <br />
          식당을 탐색해보세요
        </CategoryTitle>
        <CategoryDescription>
          다이어트, 비건, 고단백, 저당 등 다양한
          <MoBr>
            <br />
          </MoBr>
          카테고리를 탐색하여{" "}
          <PCBr>
            <br />
          </PCBr>
          나에게 딱 맞는 식당을 찾아{" "}
          <MoBr>
            <br />
          </MoBr>
          건강한 한 끼를 더 쉽게 만나보세요!
        </CategoryDescription>
      </CategoryTextWrapper>
      <CategoryContents>
        <CategoryCardWrapper>
          {categoryDataTop.map((item, index) => (
            <Card_category key={index} $icon={item.icon} $text={item.text} />
          ))}
        </CategoryCardWrapper>
        <CategoryCardWrapper>
          {categoryDataBottom.map((item, index) => (
            <Card_category key={index} $icon={item.icon} $text={item.text} />
          ))}
        </CategoryCardWrapper>
      </CategoryContents>
    </CategoryContainer>
  );
};

export default Category;
