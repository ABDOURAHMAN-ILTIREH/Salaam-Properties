import './App.css';
import Header from './components/Header';
import Home  from './components/Home.jsx'
import About from './components/About';
import Service from './components/Service';
import Properties from './components/Properties';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
