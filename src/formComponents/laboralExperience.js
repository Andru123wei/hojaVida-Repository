import React, { Fragment, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControlLabel,

    Checkbox
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function LaboralExperience() {
    const classes = useStyles();
    

    const checkBoxChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        
    };

    const [state, setState] = React.useState({
        inProgress: false,

    });
    const { inProgress } = state;

    return (
        <Fragment>
            <p>
                Experiencia Laboral
            </p>

            <div>
                <form className={classes.root}>

                <FormControlLabel

                    control={<Checkbox checked={inProgress}
                        onChange={checkBoxChange}
                        color="primary"
                        name="inProgress" />}

                    label="¿Tiene experiencia laboral?"

                />
                
                <TextField id="outlined-basic" label="Nombre de la empresa" variant="outlined" />
                <TextField id="outlined-basic" label="Duracion del contrato" variant="outlined" />
                <TextField id="outlined-basic" label="Cargo" variant="outlined" />
                </form>
            </div>

        </Fragment>

    )
}
