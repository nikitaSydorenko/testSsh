
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { addTodo } from "../actions/actionTodo";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"

    },
    texField: {
        width: '35ch',
    },
    button: {
        marginTop: 16
    }
}));

const NoteForm = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    let uniq = 'id' + (new Date()).getTime();
    const [note, setTodo] = useState({
        value: ''
    })
    const handleSubmit = (event) => {
        dispatch(addTodo({title: note.value, id: uniq }, uniq))
        event.preventDefault();
        if(note){
            setTodo({value: ''})
        }
    }
    const handleChange = (event) => {
        setTodo({ value: event.target.value })
    }
    return (
        <Container>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container alignItems="center">
                    <Grid item md={12}>
                        <TextField className={classes.texField} value={note.value} onChange={handleChange} id="outlined-basic" label="Note" variant="outlined" />
                    </Grid>
                    <Grid item md={12}>
                        <Button className={classes.button} variant="contained" color="primary" type="submit">
                            Add Note
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>

    )
}



export default NoteForm