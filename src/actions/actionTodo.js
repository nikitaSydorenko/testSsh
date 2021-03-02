import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../types/types";


export const addTodo = (note, id) => {
    
    return {
        type: ADD_NOTE,
        payload: {
            note, id
        }
    }
}

export const deleteNote = (id) => {
    
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const editNote = (note, id) => {
    
    return {
        type: EDIT_NOTE,
        payload: {
            note, id
        }
    }
}