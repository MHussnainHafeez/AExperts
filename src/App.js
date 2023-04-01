
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <>
    <Router>
<Navbar/>
<div className='bg'>
<Routes>
  <Route path='/' exact Component={Home}/>
  
  <Route path='/About' exact Component={About}/>
  <Route path='/Services' exact Component={Services}/>
  <Route path='/ContactUs' exact Component={Contact}/>
</Routes>
</div>
<Footer/>
<ScrollToTop smooth className='top'/>
</Router>
    </>
  );
}

export default App;
