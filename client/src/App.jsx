import './App.css';
import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './components/Theme.jsx';


function App() {
  const [screenSize, setScreenSize] = useState('');
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    // Define the function to get screen size
    const getScreenSize = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        return 'xl';
      } else if (width >= 900) {
        return 'lg';
      } else if (width >= 600) {
        return 'md';
      } else {
        return 'sm';
      }
    };

    // Call the function before the app is loaded
    const currentScreenSize = getScreenSize();
    setScreenSize(currentScreenSize);

    // Attach event listener to update screen size on window resize
    const handleResize = () => {
      const updatedScreenSize = getScreenSize();
      setScreenSize(updatedScreenSize);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []); // Empty dependency array ensures useEffect runs only once

  
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <div className="App" >
          <ResponsiveAppBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <Routes>
            <Route path="/" element={<Home screenSize={screenSize}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
