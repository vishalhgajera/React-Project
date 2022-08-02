import React from 'react';
import FullwidthSection from '../components/FullwidthSection/FullwidthSection'
import { Container } from '@mui/system';
import { Button } from '@mui/material';

function Login() {
  return (
    <>
      <FullwidthSection></FullwidthSection>
     <Container>
       <Button color='secondary'>Home page</Button>
       <Button color='secondary'>Blogs</Button>
       <Button color='secondary'>Contacts</Button>
     </Container>
    </>
  );
}

export default Login;