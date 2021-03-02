import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../types/types";

const initialState = {
    notes: {
        
    }
}

const noteReducer = (state = initialState, action) => {
    
    const { payload } = action;
    
    switch (action.type) {
        case EDIT_NOTE: 
        case ADD_NOTE:
            const { id, note = {} } = payload;
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [id]: note,
                }
            }
        case DELETE_NOTE:
            const newNotes = {...state.notes}
            delete newNotes[payload] 
            return {
                
                ...state, notes: {...newNotes }
            }
        
            
        default:
            return state;
    }
}

export default noteReducer;