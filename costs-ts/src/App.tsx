import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/company' element={<Company />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />}  />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
