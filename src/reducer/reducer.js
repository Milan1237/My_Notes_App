import {v4 as uuid} from 'uuid'
const NotesReducerFunction = (state , action)=>{
    const {type , payload} = action ; 
    switch(type){
        case 'TITLE':
            return {...state , title: payload} ;
        case 'TEXT':
            return {...state , text: payload} ;
        case 'AddNotes': 
            return {...state , notes: [...state.notes , {id: uuid() , title: payload.title , text: payload.text , isPinned: false , isArchived: false}] , title: '' , text: ''};
        case 'SetPin': 
            return {...state , notes: state.notes.map(note=> note.id === payload ? {...note , isPinned: !note.isPinned} : note)};
        case 'SetArchive':
            return {...state , notes: state.notes.map(note=> note.id === payload ? {...note , isArchived: !note.isArchived} : note) }
        case 'AddToBin':
            return {...state , deletedNotes:[...state.deletedNotes , state.notes.find((note)=>note.id === payload)] , notes: state.notes.filter(note=> note.id !== payload)};
    }


    return state ; 
}

export default NotesReducerFunction ; 
