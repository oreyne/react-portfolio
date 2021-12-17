
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/portfolio/Contact'
import Home from './components/portfolio/Home'
import Experience from './components/portfolio/Experience'
import Training from './components/portfolio/Training'
import AppMap from './components/indexs/AppMap'
import AppCryptoCurrency from './components/indexs/AppCryptoCurrency'
import AppTracker from './components/indexs/AppTracker'
import OfficialDocumentation from './components/indexs/OfficialDocumentation'
import TemperatureVeridic from './components/indexs/TemperatureVeridic'

import './css/portfolio/portfolio.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project/map' element={<AppMap />} />
        <Route path='/project/currency' element={<AppCryptoCurrency />} />
        <Route path='/project/tracker/*' element={<AppTracker />} />
        <Route path='/project/official-docs' element={<OfficialDocumentation />} />
        <Route path='/project/temperature' element={<TemperatureVeridic />} />
      </Routes>
    </Router>
  );
}

export default App;
