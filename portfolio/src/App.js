import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';
import Work from './components/Work';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Work/>
      <Contacts />
    </>
  );
}

export default App;
