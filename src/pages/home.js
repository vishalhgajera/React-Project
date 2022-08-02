import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import FullwidthSection from '../components/FullwidthSection/FullwidthSection'
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';



function Home() {
  return (
    <>
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
      <FullwidthSection></FullwidthSection>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Home;