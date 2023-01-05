import { useState, createContext, useContext } from "react";

const MenuContext = createContext();

const Menu = ({ children }) => {
  const [position, setPosition] = useState({});

  return (
    <MenuContext.Provider value={{ position, setPosition }}>
      <nav className="menu">
        {children}
        {
            Object.values(position).length > 0 && <Menu.Driver />
        }
        </nav>);
    </MenuContext.Provider>
  );
};
Menu.Driver = () => {
  const { position } = useContext(MenuContext);
  return (
    <div
      className="driver"
      style={{
        "--top": position.top + "px",
        "--left": position.left + "px",
        "--width": position.width + "px",
        "--height": position.height + "px",
      }}
    />
  );
};

Menu.Item = ({ children }) => {
  const { setPosition } = useContext(MenuContext);

  const clickHandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({ top, left, width, height });
  };
  return <button onClick={clickHandle}>{children}</button>;
};

export default Menu;
