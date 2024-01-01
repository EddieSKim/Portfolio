import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Work from './components/work/Work';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Socials from './components/socials/Socials';
import Loader from './components/loader/Loader';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
      <Analytics mode={`production`} />
      {
        loading ?
          <Loader />
          :
          <div>
            <Socials />
            <div className="container">
                <NavBar />
              <Banner />
              <div className='wrapper'>
                <About />
                <Work />
                <Projects />
                <Contacts />
              </div>
              <Footer />
            </div>
          </div>
      }
    </>
  );
}

export default App;
