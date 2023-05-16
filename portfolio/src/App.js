import './App.css';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Work from './components/work/Work';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Socials from './components/socials/Socials';

function App() {
  return (
    <>
      <Socials />
      <div className="container">
        <div className="header-ctn">
          <NavBar />
        </div>
        <Banner />
        <div className='wrapper'>
          <About />
          <Work />
          <Projects />
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
