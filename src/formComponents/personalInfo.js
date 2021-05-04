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

export default function PersonalInfo() {
    const classes= useStyles();
    return (
        <Fragment>
        
            <div className='personalInf'>
                <p>
                    Informacion personal 
                </p>
                <form className={classes.root}>

                  
                      <TextField id="nombre" label="Nombre" variant="outlined" />                 
                      
                      
                      <TextField id="apellidos" label="Apellido" variant="outlined" />                  
                      
                      
                      <TextField id="age" label="Edad" variant="outlined" />                  
                      
                                        
                      <TextField id="correo" label="Correo" variant="outlined" />                  
                      
                                      
                      <TextField id="id" label="Id" variant="outlined" />          
                      
                      
                  
                
                </form>
            </div>
        </Fragment>
    )
}
