import React from 'react';
import Box from '../Box'; 
import MainButton from '../Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Field from '../Field';
import Grid from '@material-ui/core/Grid'; 
import theme from '../../common/theme';
import { ThemeProvider } from '@material-ui/core/styles'




const StoryBook = () => {
    return(
        <ThemeProvider theme={theme}>
        <Box mt={5} mb={5}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Typography variant="subtitle1">Buttons</Typography>
                    <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
                        <MainButton width="large" color={"primary"} text={"Sign In"}/>
                        <MainButton width="medium" color={"primary"} text={"Sign In"}/>
                        <MainButton width="small" color={"primary"} text={"Sign In"}/>
                    </Box>
                    <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
                        <MainButton width="large" color={"secondary"} text={"Sign In"}/>
                        <MainButton width="medium" color={"secondary"} text={"Sign In"}/>
                        <MainButton width="small" color={"secondary"} text={"Sign In"}/>
                    </Box>
                    <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
                        <MainButton width="large" text={"Sign In"}/>
                        <MainButton width="medium" text={"Sign In"}/>
                        <MainButton width="small" text={"Sign In"}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1">Typography</Typography>
                    <Box>
                    <Typography variant="h1">
                        Typography
                    </Typography>
                    <Typography variant="h2">
                        Typography
                    </Typography>
                    <Typography variant="h3">
                        Typography
                    </Typography>
                    <Typography variant="h4">
                        Typography
                    </Typography>
                    <Typography variant="h5">
                        Typography
                    </Typography>
                    <Typography variant="h6">
                        Typography
                    </Typography>
                    <Typography variant="subtitle1">
                        Typography
                    </Typography>
                    <Typography variant="subtitle2">
                        Typography
                    </Typography>
                    </Box>
                </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Text Label</Typography>
                <Box mt={2} mb={3}>
                    <Typography variant="subtitle2">Default</Typography>
                    <Field label={'Full Name'} placeholder={"Full Name"}/>
                </Box>
                <Box mb={3}>
                    <Typography variant="subtitle2">Active</Typography>
                    <Field label={'Email Address'} placeholder={"Email Address"}/>
                </Box>
                <Box mb={3}>
                    <Typography variant="subtitle2">Error</Typography>
                    <Field label={'Password (8 characters)'} placeholder={"Password"}/>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </ThemeProvider>
    )
}

export default StoryBook;