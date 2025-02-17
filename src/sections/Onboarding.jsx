import React from 'react'
import Card_onboarding from '../components/Card_onboarding'

const Onboarding = () => {
    const onboardingData = [
        {
            icon: "src/assets/images/Health goals_img.png", 
            title: "건강 목표나 선호하는 식단은 무엇인가요?",
            text: "건강 목표에 맞춰 최적의 식당을 추천해 드려요! 다이어트, 비건, 고단백, 저당, 장 건강 등 원하는 식단을 설정해 보세요."
        },
        {
            icon: "src/assets/images/favorite food_img.png", 
            title: "좋아하는 음식의 카테고리를 선택해주세요.",
            text: "원하는 음식 스타일을 선택하세요! 한식, 양식, 일식, 중식부터 샐러드, 스무디, 브런치까지 다양한 건강식을 취향에 맞게 즐길 수 있어요."
        },
        {
            icon: "src/assets/images/Allergy_img.png", 
            title: "알러지나 피하고 싶은 음식이 있으신가요?",
            text: "알러지나 기피하는 음식을 설정하면 안전하고 맛있는 건강식을 추천해 드려요!"
        }
    ];
  return (
    <div>
        {onboardingData.map((item,index)=>(
        <Card_onboarding icon={item.icon} title={item.title} text={item.text} key={index}/>
        ))}
    </div>
  )
}

export default Onboarding