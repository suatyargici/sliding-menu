import React, { useState } from "react";

const Index = () => {
  const [position,setPosition] =useState({})
  const clickHandle = (e) => {
    // console.log(e.target.offsetWidth)
    // console.log(e.target.getBoundingClientRect());
    const { left, top, width, height } = e.target.getBoundingClientRect();
    setPosition({ left, top, width, height });
  };
  return (
    <div>
      <nav className="menu">
        {
          Object.values(position).length> 0 && (<div className="divider"
          style={{
            '--left':position.left + 'px',
            '--top':position.top  + 'px',
            '--width':position.width  + 'px',
            '--height':position.height  + 'px'
          }}
          />)
        }
        
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
