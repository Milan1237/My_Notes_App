import React, { memo } from "react";
import { useNotes } from "../context/Context";

const Note = ({ title, isPinned, id, text }) => {
  const {dispatch} = useNotes();
  console.log('component re-rendered');
  return (
    <div
      key={id}
      className="max-w-[300px] min-w-[300px] min-h-[150px] p-4 bg-[#2F3E46] flex flex-col justify-start max-h-[150px] overflow-hidden rounded-lg"
    >
      <div className=" flex justify-between">
        <h1 className=" text-xl text-left">
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </h1>
        <button onClick={() => dispatch({ type: "SetPin", payload: id })}>
          <span
            className={isPinned ? "material-icons" : "material-icons-outlined"}
          >
            push_pin
          </span>
        </button>
      </div>
      <hr />
      <p className=" text-left min-h-[65px]">
        {text.length > 30 ? text.substring(0, 50) + "..." : text}
      </p>
      <div className="flex justify-end gap-2">
        <button>
          <span className="material-icons-outlined" onClick={()=> dispatch({type: 'AddToBin' , payload: id})}>delete</span>
        </button>
        <button>
          <span className="material-icons-outlined" onClick={()=> dispatch({type: 'SetArchive' , payload: id})}>archive</span>
        </button>
      </div>
    </div>
  );
};

export default memo( Note);
