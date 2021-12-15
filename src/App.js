
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/portfolio/Contact'
import Home from './components/portfolio/Home'
import Experience from './components/portfolio/Experience'
import Training from './components/portfolio/Training'

import './css/portfolio/portfolio.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
