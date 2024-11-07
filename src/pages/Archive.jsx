import React from 'react'
import {useNotes} from '../context/Context'
import Note from '../components/Note';
const Archive = () => {
  const {notes } = useNotes(); 
  const archiveNotes = notes.filter(note=> note.isArchived);
  return (
    <div className='ml-4 mt-4'>
    {archiveNotes.length > 0 ? (
        <>
          <h1 className=" text-start ml-4 mt-4 text-xl font-bold">
            Archived notes
          </h1>
          <div className="flex gap-4 flex-wrap p-4 ">
            {archiveNotes.map((note) => {
              return (
                <Note
                  key={note.id}
                  {...note}
                  pageType={'archive'}
                />
              );
            })}
          </div>
        </>
      ):
      <h2>There is no archive notes</h2>
      }
    </div>
  )
}

export default Archive