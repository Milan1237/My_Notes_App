import React, { useEffect, useMemo } from "react";
import Input from "../components/Input";
import { useNotes } from "../context/Context";
import Note from "../components/Note";

const Home = () => {
  const { notes, dispatch } = useNotes();

  useEffect(()=>{
    let prevNote = localStorage.getItem('notes');
    prevNote = prevNote ? JSON.parse(prevNote) : []; 
    console.log(prevNote);
    dispatch({type: 'PrevNote' , payload: prevNote});
  },[]);
  useEffect(()=>{
    if(notes.length > 0){
    localStorage.setItem('notes' ,JSON.stringify(notes) )};
  },[notes]);
  const pinnedNotes = useMemo(
    () => notes.filter((note) => note.isPinned && !note.isArchived && !note.isImportant),
    [notes]
  );
  const otherNotes = useMemo(
    () => notes.filter((note) => !note.isPinned && !note.isArchived && !note.isImportant),
    [notes]
  );

  return (
    <>
      <Input dispatch={dispatch} pageType={'home'} />

      {pinnedNotes.length > 0 && (
        <>
          <h1 className=" text-start ml-4 mt-4 text-xl font-bold">
            Pinned notes
          </h1>
          <div className="flex gap-4 flex-wrap p-4 ">
            {pinnedNotes.map((note) => {
              return (
                <Note
                  key={note.id}
                  {...note}
                  pageType={'home'}
                />
              );
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
              return (
                <Note
                  key={note.id}
                  {...note}
                  pageType={'home'}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
