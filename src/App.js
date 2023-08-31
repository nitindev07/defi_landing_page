import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Developer from './components/Developer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="Appb">
      <Navbar/>
      <Hero/>
      <About/>
      <Developer/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
