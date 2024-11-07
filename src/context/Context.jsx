import { createContext , useContext, useReducer  } from "react";
import NotesReducerFunction from "../reducer/reducer";
//create context with intial value
const initialValue = {
    title: '',
    text: '' ,
    notes: [],
    deletedNotes: []
}
const context = createContext(initialValue);

//create a component which will provide all the value

export const ContextComponent = ({children})=>{
    const [{title , text , notes , deletedNotes} , dispatch] = useReducer(NotesReducerFunction , initialValue);
    return(
        <context.Provider  value={{title , text , notes , deletedNotes, dispatch}}>
            {children}
        </context.Provider>
    )
}

//return the context which will use the value

export const useNotes = ()=> useContext(context);