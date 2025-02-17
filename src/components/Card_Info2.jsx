import React from "react";

const Card_Info2 = ({ icon, text }) => {
  console.log(icon);
  console.log(text);
  return (
    <div>
      <img src={icon} />
      <p>{text}</p>
    </div>
  );
};

export default Card_Info2;
