import React from 'react';
import Card_category from '../components/Card_category';
import styled from 'styled-components';

const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 40px;
    padding: 0 16px;
`
const CategoryTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
// 카테고리 제목 스타일
const CategoryTitle = styled.h2`
    line-height: 1.5;
`
// 카테고리 본문 스타일
const CategoryDescription = styled.p`
    color: ${({ theme }) => theme.colors.grey600};
    line-height: 1.5;
`

const CategoryCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;
`

const Category = () => {
    const categoryDataTop = [
        { icon: "src/assets/images/category_diet.svg", text: "다이어트" },
        { icon: "src/assets/images/category_meat.svg", text: "저탄고지" },
        { icon: "src/assets/images/category_vegan.svg", text: "비건·채식" },
        { icon: "src/assets/images/category_protein.svg", text: "고단백" },
        { icon: "src/assets/images/category_glutenfree.svg", text: "글루텐프리" },
    ];
    const categoryDataBottom = [
        { icon: "src/assets/images/category_zerosugar.svg", text: "저당·제로슈가" },
        { icon: "src/assets/images/category_detox.svg", text: "디톡스" },
        { icon: "src/assets/images/category_slowaging.svg", text: "저속노화" },
        { icon: "src/assets/images/category_less.svg", text: "저염식" },
        { icon: "src/assets/images/category_event.svg", text: "EVENT" },
    ];

    return (
        <CategoryContainer>
            <CategoryTextWrapper>
                <CategoryTitle>
                    다양한 건강 카테고리에 맞춰 <br/>
                    식당을 탐색해보세요
                </CategoryTitle>
                <CategoryDescription>
                    다이어트, 비건, 고단백, 저당 등 다양한 카테고리를 탐색하여 <br/>
                    나에게 딱 맞는 식당을 찾아 건강한 한 끼를 더 쉽게 만나보세요!
                </CategoryDescription>
            </CategoryTextWrapper>
            <CategoryCardWrapper>
                {categoryDataTop.map((item, index) => (
                    <Card_category icon={item.icon} text={item.text} key={index} />
                ))}
            </CategoryCardWrapper>
            <CategoryCardWrapper>
                {categoryDataBottom.map((item, index) => (
                    <Card_category icon={item.icon} text={item.text} key={index} />
                ))}
            </CategoryCardWrapper>
        </CategoryContainer>
    );
};

export default Category;
