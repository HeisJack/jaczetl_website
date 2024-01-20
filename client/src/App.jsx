import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


function App() {
  return (
    <Router>
      <div className="App" >
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
