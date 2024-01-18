import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './components/cantact_us';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;