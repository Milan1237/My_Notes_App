import React from "react";
import { useNotes } from '../context/Context'
const Input = ({title , text , dispatch}) => {
  
  return (
    <>
      <form
        className=" flex flex-col w-[350px] m-auto mt-4 relative"
      >
        <input
          className=" p-2 text-[#111827] min-h-[30px] rounded-tr-lg rounded-tl-lg border-b-[1px]"
          type="text"
          placeholder="Enter your title"
          required
          value={title}
          onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        />
        <textarea
          name="notes"
          id="notesText"
          className="text-[#111827] p-2 min-h-[120px] rounded-br-lg rounded-bl-lg "
          placeholder="Enter your notes"
          required
          style={{ resize: 'none' }}
          value={text}
          onChange={(e) => dispatch({ type: "TEXT", payload: e.target.value })}
        ></textarea>

        <button onClick={(e)=> {e.preventDefault(); dispatch({type: 'AddNotes'})} } className=" absolute h-[40px] w-[40px] bottom-[1rem] right-[1rem] rounded-[100%] z-[10] bg-[#15803d]">+</button>
      </form>
    </>
  );
};

export default Input;
