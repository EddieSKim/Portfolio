import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './Pages/Main';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
