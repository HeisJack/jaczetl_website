import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './components/Theme';
import './styles/fonts.css';

const version = process.env.REACT_APP_VERSION || '1.0.0'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: '.5vw',
        fontSize: '.5vw',
        color: '#9BB7B6'
      }}
      >
        v{version}
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
