import React from 'react'
import Input from '../components/Input'
import { useNotes } from '../context/Context'

const Home = () => {
  const {title , text , dispatch} = useNotes();
  
  return (
    <>
    <Input title={title} text={text} dispatch={dispatch} />
    
    </>
  )
}

export default Home