import { Button, Checkbox, Container, List, ListItem } from "@material-ui/core"
import React, { useState } from "react"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../actions/actionTodo";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';




const Note = ({ note: noteProp, idx }) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffa726'
            }
        }
    });
    const [editable, setEditeble] = useState(false)
    const [note, setNote] = useState(noteProp)

    let dispatch = useDispatch()
    const handleChange = (e) => {
        setNote({
            ...note,
            title: e.target.value

        })
    }
    const handleClickEdit = () => {
        if (editable) {
            dispatch(editNote(
                note, idx
            ))
        }
        setEditeble(!editable)
    }
    const handleCheck = (e) => {
        dispatch(editNote({
            ...note,
            isChecked: e.target.checked
        }, idx))
        setNote({
            ...note,
            isChecked: e.target.checked
        })
    }

    console.log(note)
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <List>
                    <ListItem id={idx}>
                        <Checkbox checked={note.isChecked} onChange={handleCheck} tabIndex={-1} disableRipple />
                        <ListItemText primary={editable ? <input value={note.title} onChange={handleChange} /> : note.title} />
                        <ListItemText primary={note.description} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete"
                                onClick={() => {
                                    dispatch(deleteNote(idx));
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <Button disabled={!note.title} onClick={handleClickEdit} variant="contained" color="primary">
                                {editable ? "UPDATE" : "EDIT"}
                            </Button>
                        </ListItemSecondaryAction>

                    </ListItem>
                </List>
            </Container>
        </ThemeProvider>
    )
}



export default Note;