import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Hobbies() {


    return (
        <Fragment>
            <div>
                <p>
                    Hobbies
                </p>
                <TextField
                    id="outlined-multiline-static"
                    
                    multiline
                    rows={4}
                    
                    variant="outlined"
                />
            </div>

        </Fragment>
    )
}
