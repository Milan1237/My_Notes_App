import React, { useRef } from "react";
import { memo } from "react";
const Input = ({ dispatch , pageType }) => {
  const title = useRef("");
  const text = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    if(text.current.value.length > 0 &&
      title.current.value.length > 0) {

      
      switch(pageType){
        case 'home': 
        dispatch({
            type: "AddNotes",
            payload: { title: title.current.value, text: text.current.value },
          })
          break ; 
        case 'important':
          dispatch({
            type: "AddImportantNotes",
            payload: { title: title.current.value, text: text.current.value },
          })
          break ; 
      }

      // dispatch({
      //   type: "AddNotes",
      //   payload: { title: title.current.value, text: text.current.value },
      // });

      title.current.value = '';
      text.current.value = '';
    }
  }

  return (
    <>
      <form className=" flex flex-col w-[350px] m-auto mt-4 relative">
        <input
          className=" p-2 text-[#111827] min-h-[30px] rounded-tr-lg rounded-tl-lg border-b-[1px]"
          type="text"
          placeholder="Enter your title"
          required={true}
          ref={title}
        />
        <textarea
          name="notes"
          id="notesText"
          ref={text}
          className="text-[#111827] p-2 min-h-[120px] rounded-br-lg rounded-bl-lg "
          placeholder="Enter your notes"
          required={true}
          style={{ resize: "none" }}
        ></textarea>

        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className=" absolute h-[40px] w-[40px] bottom-[1rem] right-[1rem] rounded-[100%] z-[10] bg-[#15803d]"
        >
          +
        </button>
      </form>
    </>
  );
};

export default memo(Input);
