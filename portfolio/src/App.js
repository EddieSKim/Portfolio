import './App.css';
import NavBar from './components/navBar/NavBar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Work from './components/work/Work';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="container">
      <div className="header-ctn">
        <NavBar />
      </div>
      <div className="wrapper">
        <Banner />
        <About />
        <Projects />
        <Work />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
