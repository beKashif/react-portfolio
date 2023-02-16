import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      </BrowserRouter>
    </>
  );
}

export default App;
