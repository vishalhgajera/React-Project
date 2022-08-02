import React from 'react';
import './Main.css';
import SideBar from './SideBar/SideBar'
import MainContent from './MainContent/MainContent'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Main(){
  return(
    <>
    <div className="Main">
     <Container>
     <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={4}>
        <Grid item md={9} xs={12}>
          <MainContent></MainContent>
        </Grid>
        <Grid item md={3} xs={12} mb={4}>
          <SideBar></SideBar>
        </Grid>
      </Grid>
    </Box>
     </Container>
    </div>
    </>
  );
}