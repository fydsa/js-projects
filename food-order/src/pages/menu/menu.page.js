import React from "react";
import MenuItem from "../../components/menuItem/menuItem.component";
import { menu_list } from "../../data/menuList";
import "./menu.style.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menu_list.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
