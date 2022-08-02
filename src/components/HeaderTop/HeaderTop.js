import React from 'react';
import './HeaderTop.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HeadphonesSharpIcon from '@mui/icons-material/HeadphonesSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function HeaderTop() {
  return (
    <div className='HeaderTop' role="presentation" onClick={handleClick}>
      <Container maxWidth="lg">
      <Breadcrumbs className='HeadertopList' aria-label="breadcrumb" sx={{color:"white" }} >
        <Link
          underline="hover"
          sx={{ fontSize: "smaller", display: 'flex',height:"42px", alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <MailOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contact
        </Link>
        <Link
          underline="hover"
          sx={{ fontSize: "smaller", display: 'flex',height:"42px", alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <HeadphonesSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Support
        </Link>
        <Link
          underline="hover"
          sx={{ fontSize: "smaller", display: 'flex',height:"42px", alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <PersonSharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Login Area
        </Link>
      </Breadcrumbs>
      </Container>
    </div>
  );
}