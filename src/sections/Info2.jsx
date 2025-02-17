import React from "react";
import Card_Info2 from "../components/Card_info2";

const Info2 = () => {
  const info2Data = [
    { icon: "src/assets/images/icon_1.svg", text: "좋아하는 음식을 설정하면 추천해줘요" },
    { icon: "src/assets/images/icon_2.svg", text: "알러지와 기피하고 싶은 음식도 반영해줘요" },
    { icon: "src/assets/images/icon_3.svg", text: "건강 목표를 설정하고 목표에 맞춘 식당을 보여줘요" },
    { icon: "src/assets/images/icon_4.svg", text: "퀴즈와 출석체크를 통해 포인트를 모아보세요" },
    { icon: "src/assets/images/icon_5.svg", text: "건강식 키워드로 탐색할 수 있어요" },
    { icon: "src/assets/images/icon_6.svg", text: "신뢰도 높은 리뷰를 확인할 수 있어요" },
    { icon: "src/assets/images/icon_7.svg", text: "귀여운 캐릭터를 키울 수 있어요" }
  ];

  return (
    <div>
      <h2>Weat에서 다 해결했어요</h2>
      <div>
        {info2Data.map((item,index)=>(
          <Card_Info2 icon={item.icon} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Info2;
