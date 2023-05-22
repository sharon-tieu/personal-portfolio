// import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
