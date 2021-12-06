
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppTracker from './components/indexs/AppTracker'
import AppMap from './components/indexs/AppMap'
import AppCryptoCurrency from './components/indexs/AppCryptoCurrency'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tracker/*' element={<AppTracker />} />
        <Route path='/map' element={<AppMap />} />
        <Route path='/currency' element={<AppCryptoCurrency />} />
      </Routes>
    </Router>
  );
}

export default App;
