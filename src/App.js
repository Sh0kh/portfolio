import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
