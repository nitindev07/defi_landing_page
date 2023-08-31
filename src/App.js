import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Developer from './components/Developer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pappu from './components/Pappu';

function App() {
  return (
    <div className="Appb">
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Contact/>
      <Footer/>
      <Pappu/>
    </div>
  );
}

export default App;
