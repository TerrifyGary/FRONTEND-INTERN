import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InfoPage from './InfoPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RepoPage from './RepoPage';
import Home from './Home';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/*" element={<Home/>}/> {/* 主畫面爹斯。 歡迎光臨。 */ }
      <Route path="/users/:username/repos" element={<InfoPage />} /> {/* 串接第一頁。 */}
      <Route path="/users/:username/repos/:repo" element={<RepoPage />} /> {/* 接收第一頁的repo，傳給第二頁。 */}
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
