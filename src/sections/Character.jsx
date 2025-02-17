import React from 'react'
import Button from '../components/Button'
import Card_character from '../components/Card_character'

const character = () => {
  return (
    <div>
        
        <div>
            <h2>포인트를 모아서 4종 랜덤 위펫을 만나보세요!</h2>
            <p>포인트를 모으면 화분에서 꽃이 자라고,랜덤 위펫 등장해요! 🌱🍅🥕🥦 어떤 친구가 나올지 기대해 보세요!</p>
        </div>

        <div>
            <Card_character
            plant="src/assets/images/Flower_Level1.svg"
            text1="Lv.1"
            icons={[
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",    
              ]}
            text2="작은 씨앗에서 새로운 생명의 시작을 느껴보세요!"
            />

            <Card_character
              plant="src/assets/images/Flower_Level2.svg"
              text1="Lv.2"
               icons={[
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",    
                 ]}
               text2="첫 싹이 틀 때, 당신의 식물도 함께 자라기 시작합니다!"
                 />

            <Card_character
              plant="src/assets/images/Flower_Level3.svg"
              text1="Lv.3"
               icons={[
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart grey.svg",
                "src/assets/images/icon_Heart grey.svg",    
                 ]}
               text2="싹에서 꽃 봉우리가 싹트기 시작했습니다!"
                />

            <Card_character
              plant="src/assets/images/Flower_Level4.svg"
              text1="Lv.4"
               icons={[
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart grey.svg",    
                 ]}
               text2="아름다운 꽃이 만개할 순간이 가까워졌습니다!"
                />

            <Card_character
              plant="src/assets/images/Flower_riddle.svg"
              text1="Lv.5"
               icons={[
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                "src/assets/images/icon_Heart.svg",
                 ]}
               text2="아름다운 꽃이 어떤 열매를 맺었을까요?"
                />


        </div>

        <div>
            <h3>여러분을 기다리는 위펫은 어떤 모습일까요?</h3>
            <img/>
        </div>

        <div>
            <img/>
            <img/>
            <img/>
            <img/>
        </div>

        <Button type="outline-btn" href="/characters">
            위펫 만나러가기
        </Button>
    </div>
  )
}

export default character