import React, { Suspense } from 'react';
import Box from "@material-ui/core/Box";
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import theme from './common/theme'
import MainButton from './components/Button';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <Container fixed>
      <Suspense fallback={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>
              <Box width="600px" margin="auto" mt={10} mb={20}>
              <Typography variant="h4">
                Hello, I'm Sasha,
              </Typography>
              <Typography variant="h5">
                I was enjoying making this task for you
              </Typography>
              <Typography variant="h4">
                Check it out down below 
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/story-book"><MainButton text="Task One" width="large" color="primary"/></Link>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/sign-up"><MainButton text="Task Two" width="large" color="secondary"/></Link>
                </Grid>
              </Grid>
              <Typography variant="h5">
                Thanks!
              </Typography>
              </Box>
      </ThemeProvider>
        
      </Suspense>
    </Container>
    
  );
}

export default App;
