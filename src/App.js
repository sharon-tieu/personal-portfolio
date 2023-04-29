// import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EmailContact } from './components/EmailContact';
// import { Contact } from './components/Contact';
import { About } from './components/About';
// import { Contactform } from './components/Contactform';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      {/* <Contactform /> */}
      {/* <Contact /> */}
      <EmailContact />
    </div>
  );
}

export default App;
