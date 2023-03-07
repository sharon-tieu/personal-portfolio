// import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
