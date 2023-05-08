import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App, { StaticWbApp } from './App';
import reportWebVitals from './reportWebVitals';
import { Footer } from './static website/footer';
import { BusinessPage } from './business Landing Page';


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BusinessPage />
  </React.StrictMode>
);
// const footer = createRoot(document.querySelector('#footer'));
// footer.render(
//   <Footer />
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
