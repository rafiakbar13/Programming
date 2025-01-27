import React from "react";
const Sidebar = ({ menu }) => {
  return (
    <aside className="flex flex-col mt-20 gap-y-5">
      {menu.map((menu) => {
        return <div>{menu.title}</div>;
      })}
    </aside>
  );
};

export default Sidebar;
