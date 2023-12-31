import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Landing</Link>
      </div>
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
    </Router>
  );
}

export default App;
