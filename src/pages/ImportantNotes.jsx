import React, { useMemo, useEffect } from "react";
import { useNotes } from "../context/Context";
import Input from "../components/Input";
import Note from "../components/Note";
const ImportantNotes = () => {
  const { dispatch, notes } = useNotes();
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);
  useEffect(() => {
    let prevNote = localStorage.getItem("notes");
    prevNote = prevNote ? JSON.parse(prevNote) : [];
    console.log(prevNote);
    dispatch({ type: "PrevNote", payload: prevNote });
  }, []);
  const pinnedNotes = useMemo(
    () =>
      notes.filter(
        (note) => note.isPinned && !note.isArchived && note.isImportant
      ),
    [notes]
  );
  const otherNotes = useMemo(
    () =>
      notes.filter(
        (note) => !note.isPinned && !note.isArchived && note.isImportant
      ),
    [notes]
  );

  return (
    <div className="mt-2 ml-2">
      <Input dispatch={dispatch} pageType={"important"} />

      {pinnedNotes.length > 0 && (
        <>
          <h1 className=" text-start ml-4 mt-4 text-xl font-bold">
            Pinned notes
          </h1>
          <div className="flex gap-4 flex-wrap p-4 ">
            {pinnedNotes.map((note) => {
              return <Note key={note.id} {...note} pageType={"important"} />;
            })}
          </div>
        </>
      )}
      {otherNotes.length > 0 && (
        <>
          <h1 className=" text-start ml-4 mt-4 text-xl font-bold">
            Other notes
          </h1>
          <div className="flex gap-4 flex-wrap p-4 ">
            {otherNotes.map((note) => {
              return <Note key={note.id} {...note} pageType={"important"} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ImportantNotes;
