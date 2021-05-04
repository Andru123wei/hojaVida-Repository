import React, { Fragment, useState } from 'react'


import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    MenuItem,
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
    Checkbox
} from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';



let academicLevel = [
    {
        value: 'primary',
        label: 'Primaria',
    },
    {
        value: 'secundary',
        label: 'Bachiller basico',
    },
    {
        value: 'highSchool',
        label: 'Bachiller academico',
    },
    {
        value: 'college',
        label: 'Profesional',
    },


];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    root2: {
        display: 'none',

    },


    formControl: {
        margin: theme.spacing(3),
    },
    CheckBoxColor: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    }
}));




export default function AcademicInfo() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('primary');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [state, setState] = React.useState({
        inProgress: false,

    });

    const checkBoxChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { inProgress } = state;





    return (

        <Fragment>

            <div className='AcademicInf'>
                <p>
                    Formacion Academica
                </p>

                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Seleccione"
                            value={currency}
                            onChange={handleChange}
                            helperText="Seleccion su nivel de estudio"
                        >
                            {academicLevel.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}

                        </TextField>
                    </div>
                </form>
                <form className={classes.root}>

                    <TextField id="outlined-basic" label="Nombre Institucion" variant="outlined" />
                    
                        <TextField
                            id="date"
                            label="Fecha de graduacion"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    

                    <FormControlLabel

                        control={<Checkbox checked={inProgress}
                            onChange={checkBoxChange}
                            color="primary"
                            name="inProgress" />}
                            label="En curso"
                            
                    />
                </form>
            </div>

        </Fragment>
    )
}
