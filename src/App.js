
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppTracker from './components/indexs/AppTracker'
import AppMap from './components/indexs/AppMap'
import AppCryptoCurrency from './components/indexs/AppCryptoCurrency'
import OfficialDocumentation from './components/indexs/OfficialDocumentation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tracker/*' element={<AppTracker />}>Route</Route>
        <Route path='/map' element={<AppMap />} />
        <Route path='/currency' element={<AppCryptoCurrency />} />
        <Route path='/official-docs' element={<OfficialDocumentation />} />
      </Routes>
    </Router>
  );
}

export default App;
