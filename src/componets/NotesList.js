
import React from "react"
import { useSelector } from "react-redux"
import Note from "./Note"


const NotesList = () => {
    
    const propsNotes = useSelector(state => state.notes.notes)
    const keyArr = Object.keys(propsNotes)
    
    


    return keyArr.map( id => {
        const note = propsNotes[id]
        return <Note note={note} key={id} idx={id} />
    }  )
}


export default NotesList