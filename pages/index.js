import React, { useState } from "react";

const Index = () => {
  const [positon,setPosition] =useState({})
  const clickHandle = (e) => {
    // console.log(e.target.offsetWidth)
    // console.log(e.target.getBoundingClientRect());
    const { left, top, width, height } = e.target.gerBoundingClientRect();
    setPosition({ left, top, width, height });
  };
  return (
    <div>
      <nav className="menu">
        <div className="divider"/>
        <button onClick={clickHandle}>Hakkımda</button>
        <button onClick={clickHandle}>İletişim</button>
        <button onClick={clickHandle}>Blog</button>
        <button onClick={clickHandle}>makaleler</button>
        <button onClick={clickHandle}>Dersler</button>
      </nav>
    </div>
  );
};

export default Index;
