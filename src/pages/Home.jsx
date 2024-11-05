import React from 'react'
import Input from '../components/Input'
import { useNotes } from '../context/Context'
import Note from '../components/Note';

const Home = () => {
  const {title , text , notes,  dispatch} = useNotes();
  return (
    <>
    <Input  title={title} text={text} dispatch={dispatch}/>
    <Note />
    </>
  )
}

export default Home