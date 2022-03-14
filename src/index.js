import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InfoPage from './InfoPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoPage from './RepoPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/users/:username/repos" element={<InfoPage />} /> {/* 設定其他repository的頁面路徑 */}
      <Route path="/users/:username/repos/:repo" element={<RepoPage />} /> {/* 設定其他repository的頁面路徑 */}
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
