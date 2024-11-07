import React from "react";
import { useNotes } from "../context/Context";
import Note  from "../components/Note";

const Bin = () => {
  const { deletedNotes } = useNotes();
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
