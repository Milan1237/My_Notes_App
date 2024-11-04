
const NotesReducerFunction = (state , {payload,type})=>{
    switch(type){
        case 'TITLE':
            return {...state , title: payload} 
        case 'TEXT':
            return {...state , title: payload} 
    }


    return state ; 
}

export default NotesReducerFunction ; 
