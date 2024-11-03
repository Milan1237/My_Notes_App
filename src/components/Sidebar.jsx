import React from "react";

const Sidebar = () => {
  return (
    <aside className="  flex flex-col gap-4 mt-4 h-full w-fit border-r-2 border-[#263350]">
      <div className="pr-2 flex gap-4 min-w-[200px]">
        <span class="material-symbols-outlined">home</span>
        <p>Home</p>
      </div>
      <div className="pr-2 flex gap-4 min-w-[200px]">
        <span class="material-symbols-outlined">archive</span>
        <p>Archive</p>
      </div>
      <div className="pr-2 flex gap-4 min-w-[200px]">
        <span class="material-symbols-outlined">delete</span>
        <p>Bin</p>
      </div>
    </aside>
  );
};

export default Sidebar;
