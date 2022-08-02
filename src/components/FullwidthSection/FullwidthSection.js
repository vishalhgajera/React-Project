import React from 'react';
import './FullwidthSection.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function FullwidthSection() {
  return (
    <>
      <div className="FullwidthSection">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12} mt={5} pr={"80px"}>
                <Stack spacing={2} height="100%" justifyContent={"center"}>
                  <Typography className='Comment-title' variant="h5" component="div" spacing={3} color="white">
                    {" This is my first Question"}
                  </Typography>
                  <Typography variant="body2" color="white" component="p" spacing={3}>
                    {"This is my first QuestionThis is my first QuestionThis is my first QuestionThis is my first QuestionThis is my first QuestionThis is my first QuestionThis is my first Question"}
                  </Typography>
                  <Stack className='button-group' direction="row" spacing={3}>
                    <Button variant="contained" color="inherit">
                      Button
                    </Button>
                    <Button variant="contained" color="inherit">
                      Button
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={8} xs={12}>
              <Stack spacing={2} height="100%" justifyContent={"end"} alignItems="end">
              <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="write your question here."
                  minRows={12}
                  className="question-textarea"
                />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}