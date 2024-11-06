import React from 'react'
import Input from '../components/Input'
import { useNotes } from '../context/Context'
import Note from '../components/Note';



const Home = () => {

  const {title , text , notes , dispatch } = useNotes();


  return (
    <>
    <Input  title={title} text={text} dispatch={dispatch}/>

    {(notes.some(note=> (note.isPinned === true && note.isArchived === false) && true ) ) && <h1 className=' text-start ml-4 mt-4 text-xl font-bold'>Pinned notes</h1> }
    <div className='flex gap-4 flex-wrap p-4 '>
      {notes.map((note)=>{
         return (note.isPinned === true && note.isArchived === false) &&  <Note key={note.id} title={note.title} text={note.text} isPinned={note.isPinned} id={note.id}  />
      })}
    </div>
    {(notes.some(note=> (note.isPinned === false && note.isArchived === false) && true ) ) && <h1 className=' text-start ml-4 mt-4 text-xl font-bold'>Other notes</h1> }
    <div className='flex gap-4 flex-wrap p-4 '>
      {notes.map((note)=>{
         return (note.isPinned === false && note.isArchived === false) &&  <Note key={note.id} title={note.title} text={note.text} isPinned={note.isPinned} id={note.id}  />
      })}
    </div>
    </>
  )
}

export default Home