import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
