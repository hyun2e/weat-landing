import React from 'react';
import Card_category from '../components/Card_category';

const Category = () => {
    const categoryData = [
        { icon: "src/assets/images/category_diet.svg", text: "다이어트" },
        { icon: "src/assets/images/category_meat.svg", text: "저탄고지" },
        { icon: "src/assets/images/category_vegan.svg", text: "비건·채식" },
        { icon: "src/assets/images/category_protein.svg", text: "고단백" },
        { icon: "src/assets/images/category_glutenfree.svg", text: "글루텐프리" },
        { icon: "src/assets/images/category_zerosugar.svg", text: "저당·제로슈가" },
        { icon: "src/assets/images/category_detox.svg", text: "디톡스" },
        { icon: "src/assets/images/category_slowaging.svg", text: "저속노화" },
        { icon: "src/assets/images/category_less.svg", text: "저염식" },
        { icon: "src/assets/images/category_event.svg", text: "EVENT" },
    ];

    return (
        <div>
            <div>
                <h2>다양한 건강 카테고리에 맞춰 식당을 탐색해보세요</h2>
                <p>
                    다이어트, 비건, 고단백, 저당 등 다양한 카테고리를 탐색하여 
                    나에게 딱 맞는 식당을 찾아 건강한 한 끼를 더 쉽게 만나보세요!
                </p>
            </div>
            <div>
                {categoryData.map((item, index) => (
                    <Card_category icon={item.icon} text={item.text} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Category;
