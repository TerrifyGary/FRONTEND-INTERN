import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoPage from './InfoPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export { default as InfoPage} from "./InfoPage";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/infoPage" element={<InfoPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
