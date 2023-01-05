import React from "react";

const Menu = ({ children }) => {

  return (
  <nav className="menu">
    {children}
    </nav>);
};

Menu.Item =({children}) =>{7
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    const clickHandle = (e) =>{

    }
    return(
        <button onClick={clickHandle}>
            {children}
        </button>
    )
}

export default Menu;
