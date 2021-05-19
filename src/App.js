import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'; 


import StoryBook from './components/StoryBook';
import MainForm from './components/Form'

import theme from './common/theme'


function App() {
  return (
    <Container fixed>
      <Suspense fallback={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>

          {/* <Box display="flex" alignItems="center" mx={'auto'}>
            <Box p={5}>
              <Button size="large" variant="contained">
                  Sign Up
              </Button>
            </Box>
            <Box p={5}>
              <Button size="medium" variant="contained" color="primary">
                Sign Up
              </Button>
            </Box>
            <Box p={5}>
              <Button size="small" variant="contained" color="primary">
                Sign Up
              </Button>
            </Box>
          </Box> */}
              <StoryBook />
              <MainForm />

          
        </ThemeProvider>
        
      </Suspense>
    </Container>
    
  );
}

export default App;
