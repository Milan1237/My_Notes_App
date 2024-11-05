import React from "react";

const Note = () => {
  return (
    <div className="max-w-[300px] min-w-[300px] min-h-[150px] p-4 bg-[#2F3E46] flex flex-col justify-start max-h-[150px] overflow-hidden rounded-lg">
      <div className=" flex justify-between">
        <h1 className=" text-xl text-left">Title</h1>
        <button>
          <span class="material-icons-outlined">push_pin</span>
        </button>
      </div>
      <hr />
      <p className=" text-left">
        Note 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dignissimos nihil sapiente officiis eaque dolorum asperiores provident
        cumque libero aliquid voluptate ipsa laborum, quod minima quae a ab
        blanditiis veritatis alias.
      </p>
    </div>
  );
};

export default Note;
