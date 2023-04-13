import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './Pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
}

export default App;
