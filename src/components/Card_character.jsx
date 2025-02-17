import React from "react";

const Card_character = ({ text1, text2 ,icons, plant}) => {

  console.log(text1);
  console.log(text2);
  console.log(plant);
  console.log(icons);

  const plantStyle = {
    backgroundColor:"#FFF7F2",
    padding: "4px",
    borderRadius: "9px",
    display: "inline-block",
    height: "61px",
    width: "61px",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
  };
  
  return (
    <div>
       <div style={plantStyle}> <img src={plant} /> </div>
        <div>
            <div>
              <p>{text1}</p>
                <div>
          {/* 아이콘 배열을 순회하여 각 아이콘을 렌더링 */}
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`icon-${index}`} />
          ))}
               </div>
            </div>
            <p>{text2}</p>
        </div>
    </div>
  );
};

export default Card_character;
