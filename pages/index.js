import React, { useEffect, useRef, useState } from "react";
import Menu from "../components/Menu";

const Index = () => {
  const [position, setPosition] = useState({});
  const clickHandle = (e) => {
    // console.log(e.target.offsetWidth)
    // console.log(e.target.getBoundingClientRect());
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({ left, top, width, height });
  };
  const ref = useRef();
  // useEffect(() => {
  //   const el = ref.current.querySelector(".active");
  //   const { top, width, height } = el.getBoundingClientRect();
  //   const left = el.offsetLeft;
  //   setPosition({ left, top, width, height });
  // }, []);
  return (
    <div className="margin">
      <Menu>
        <Menu.Item onClick={clickHandle}>Hakkımda</Menu.Item>
        <Menu.Item onClick={clickHandle}>İletişim</Menu.Item>
        <Menu.Item onClick={clickHandle}>Blog</Menu.Item>
 
      </Menu>
      
    </div>
  );
};

export default Index;
