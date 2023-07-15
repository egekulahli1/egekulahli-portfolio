import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Main />
      <Skills />
      <ProjectList />
      <Resume />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
