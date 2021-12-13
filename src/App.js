
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppTracker from './components/indexs/AppTracker'
import AppMap from './components/indexs/AppMap'
import AppCryptoCurrency from './components/indexs/AppCryptoCurrency'
import OfficialDocumentation from './components/indexs/OfficialDocumentation'
import TemperatureVeridic from './components/indexs/TemperatureVeridic'
import FilterableProductTable from './components/indexs/FilterableProductTable'
import Portfolio from './components/indexs/Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/tracker/*' element={<AppTracker />}>Route</Route>
        <Route path='/map' element={<AppMap />} />
        <Route path='/currency' element={<AppCryptoCurrency />} />
        <Route path='/official-docs' element={<OfficialDocumentation />} />
        <Route path='/temperature' element={<TemperatureVeridic />} />
        <Route path='/mock' element={<FilterableProductTable />} />
        <Route path='/portfolio/*' element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
