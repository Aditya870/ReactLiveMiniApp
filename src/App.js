import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer'

import {Routes ,Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
        <Nav/>
        <Routes >
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/service" Component={Service}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route path="/:n" element={<Navigate to="/" />}></Route>
        </Routes >
        <Footer/>
    </>
  );
}

export default App;
