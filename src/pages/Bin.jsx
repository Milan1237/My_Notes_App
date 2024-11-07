import React from "react";
import { useNotes } from "../context/Context";
import Note  from "../components/Note";
import { useEffect  } from "react";

const Bin = () => {
  
  const { deletedNotes , dispatch } = useNotes();
  useEffect(() => {
    if (deletedNotes.length > 0) {
      localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
    }
  }, [deletedNotes]);
  useEffect(() => {
    let prevNote = localStorage.getItem("deletedNotes");
    prevNote = prevNote ? JSON.parse(prevNote) : [];
    console.log(prevNote);
    dispatch({ type: "PrevNoteDeleted", payload: prevNote });
  }, []);
  return (
    <div className='ml-4 mt-4'>
      {deletedNotes.length > 0 ? (
        <>
          <h1 className=" text-start ml-4 mt-4 text-xl font-bold">
            Archived notes
          </h1>
          <div className="flex gap-4 flex-wrap p-4 ">
            {deletedNotes.map((note) => {
              return <Note key={note.id} {...note} pageType={"delete"} />;
            })}
          </div>
        </>
      ) : (
        <h2>There is nothing in bin</h2>
      )}
    </div>
  );
};

export default Bin;
