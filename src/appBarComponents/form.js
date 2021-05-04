import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from '../formComponents/personalInfo'
import AcademicInfo from '../formComponents/academicInfo'
import LaboralExperience from '../formComponents/laboralExperience'
import PersonalReference from '../formComponents/personalReference'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Hobbies from '../formComponents/hobbies'
import { Button } from '@material-ui/core'
import './form.css'

<script type="text/javascript" src="../validation.js"></script>
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),

    },
}));

export default function Form() {
    const classes = useStyles();
    return (

        <Fragment >
            <div className="formInterface">
                <h1 className="h1p">
                    Formulario Hoja de Vida
                </h1>
                <form>
                    <PersonalInfo />
                    <input type="submit" value="Submit" />
                </form>
                    <AcademicInfo />
                    <LaboralExperience />
                    <PersonalReference />
                    <Hobbies />
               
            </div>
        </Fragment>
    )
}











