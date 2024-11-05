import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="  flex flex-col gap-4 mt-4 h-full w-fit border-r-2 border-[#263350]">
      <NavLink to={'/'} className={({ isActive }) =>`${isActive ? 'bg-[#15803d] rounded-tr-xl rounded-br-xl' : ''} p-[10px] flex gap-4 min-w-[200px] hover:bg-[#15803d] rounded-tr-xl rounded-br-xl`}>
        <span className="material-icons-outlined">home</span>
        <p>Home</p>
      </NavLink >
      <NavLink to={'/archive'} className={({ isActive }) =>`${isActive ? 'bg-[#15803d] rounded-tr-xl rounded-br-xl' : ''} p-[10px] flex gap-4 min-w-[200px] hover:bg-[#15803d] rounded-tr-xl rounded-br-xl`}>
        <span className="material-icons-outlined">archive</span>
        <p>Archive</p>
      </NavLink>
      <NavLink to={'/bin'} className={({ isActive }) =>`${isActive ? 'bg-[#15803d] rounded-tr-xl rounded-br-xl' : ''} p-[10px] flex gap-4 min-w-[200px] hover:bg-[#15803d] rounded-tr-xl rounded-br-xl`}>
        <span className="material-icons-outlined">delete</span>
        <p>Bin</p>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
