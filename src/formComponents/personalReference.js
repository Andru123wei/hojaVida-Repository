import React, {Fragment} from 'react'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function PersonalReference() {
    const classes= useStyles();
    return (
        <Fragment>
        
            <div className='personalInf'>
                <p>
                    Referencias
                </p>
                <form className={classes.root}>

                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField id="outlined-basic" label="Apellido" variant="outlined" />
                <TextField id="outlined-basic" label="Cargo" variant="outlined" />
                <TextField id="outlined-basic" label="Nombre de la empresa" variant="outlined" />
                <TextField id="outlined-basic" label="Correo" variant="outlined" />
                <TextField id="outlined-basic" label="Telefono" variant="outlined" />
                </form>
            </div>
        </Fragment>
    )
}
