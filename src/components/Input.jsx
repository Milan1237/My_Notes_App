import React from "react";

const Input = ({ title, text, dispatch }) => {
    console.log(title);
  return (
    <>
      <div
        className=" flex flex-col w-[300px]"
      >
        <input
          type="text"
          placeholder="Enter your title"
          required
          value={title}
          onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        />
        <textarea
          name="notes"
          id="notesText"
          placeholder="Enter your notes"
          required
          value={text}
          onChange={(e) => dispatch({ type: "TEXT", payload: e.target.value })}
        ></textarea>
      </div>
    </>
  );
};

export default Input;
