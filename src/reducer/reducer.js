import {v4 as uuid} from 'uuid'
const NotesReducerFunction = (state , action)=>{
    const {type , payload} = action ; 
    switch(type){
        case 'TITLE':
            return {...state , title: payload} ;
        case 'TEXT':
            return {...state , text: payload} ;
        case 'AddNotes': 
            return {...state , notes: [...state.notes , {id: uuid() , title: state.title , text: state.text}]};
    }


    return state ; 
}

export default NotesReducerFunction ; 
