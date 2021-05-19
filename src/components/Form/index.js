import React from 'react';
import Box from '../Box'; 
import MainButton from '../Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Field from '../Field';
import Grid from '@material-ui/core/Grid'; 
import theme from '../../common/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';



const INITIAL_FORM_STATE = {

};

const FORM_VALIDATION = Yup.object().shape({

})

const MainForm = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="550px" margin="auto">
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Sign up to set your brand up for success
                    </Typography>
                </Grid>
                <Grid item xs={6} mt={3}>
                    <MainButton width="large" color="secondary" text={"Sign in with Google"}/>
                </Grid>
                <Grid item xs={6}>
                    <MainButton width="large" text={`Sign in with Facebook`}/>
                </Grid>
                <Grid item xs={12}>
                    <Formik 
                        initialValues={{...INITIAL_FORM_STATE}}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        <Form>



                        </Form>
                    </Formik>
                </Grid>
            </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default MainForm;