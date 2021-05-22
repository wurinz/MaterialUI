import React from 'react';
import Box from '../Box'; 
import MainButton from '../Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 
import theme from '../../common/theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Textfield from './Textfield'
import Button from './Button';
import { Link } from 'react-router-dom';


import { Formik, Form } from 'formik';
import * as Yup from 'yup';






const INITIAL_FORM_STATE = {
    fullName: '',
    email: '',
    password: ''
};

const FORM_VALIDATION = Yup.object().shape({
    fullName: Yup.string().required('Required').min(3, "Your name can't be shorter than 3 symbols"),
    email: Yup.string().email('Invalid email.').required('Required'),
    password: Yup.string().required('Please input your password!').min(8, 'The password must be at least 8 characters!').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

 


const MainForm = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box mt={20} mb={15} width="550px" margin="auto">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        Sign up to set your brand up for success
                    </Typography>
                </Grid>
                <Grid item xs={6} mt={3}>
                    <MainButton icon="google" width="large" color="secondary" text={"Sign in with Google"}/>
                </Grid>
                <Grid item xs={6}>
                    <MainButton icon="facebook" width="large" text={`Sign in with Facebook`}/>
                </Grid>
                <Grid item xs={12}>
                    <Formik
                        initialValues={{
                            ...INITIAL_FORM_STATE
                        }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Textfield name={"fullName"} label={'Full Name'} placeholder={"Full Name"}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Textfield name={"email"} label={'Email Address'} placeholder={"Email Address"}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Textfield name={"password"} label={'Password (8 characters)'} placeholder={"Password"}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button />
                                </Grid> 
                            </Grid>

                        </Form>
                    </Formik>
                </Grid>
            </Grid>
            </Box>
            
            <Box ml={10} mt={15}>
                <Link to="/main"><MainButton width="medium" text="home"/></Link>
            </Box>
        </ThemeProvider>
    )
}

export default MainForm;