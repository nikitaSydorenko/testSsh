import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { addTodo } from "../actions/actionTodo";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"

    },
    texField: {
        width: '35ch',
        margin: 5
    },
    button: {
        marginTop: 16
    }
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa726'
        }
    }
});

const NoteForm = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    let uniq = 'id' + (new Date()).getTime();
    const [note, setTodo] = useState({
        value: '',
        description: '',
        isChecked: false
    })



    const handleSubmit = (event) => {

        dispatch(addTodo({ title: note.value, description: note.description, isChecked: note.isChecked, id: uniq }, uniq))
        event.preventDefault();
        if (note) {
            setTodo({
                ...note,
                value: '',
                description: ''
            })

        }
    }
    const handleChangeTitle = (event) => {
        setTodo({
            ...note,
            value: event.target.value
        })

    }
    const handleChangeDesc = (event) => {

        setTodo({
            ...note,
            description: event.target.value
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container alignItems="center">

                        <Grid item md={12}>
                            <TextField
                                className={classes.texField}
                                value={note.value} onChange={handleChangeTitle}
                                color="primary"
                                id="outlined-basic"
                                label="Note"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item md={12}>
                            <TextField
                                className={classes.texField}
                                value={note.description}
                                onChange={handleChangeDesc}
                                color="primary"
                                id="standart-error"
                                label="Description"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item md={12}>
                            <Button
                                disabled={!note.value || !note.description}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type="submit">
                                Add Note
                    </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    )
}



export default NoteForm