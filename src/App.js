import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import InfoPage from './InfoPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();

  let userName ="TerrifyGary"

  // ------------------------------- //
  const [repoStar, setRepoStar] = useState();
  // ------------------------------- //

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/"+userName+"/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(10, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank">
                repo名稱：  
              </a>
              <NavLink className="nav-item" to="/infoPage">
                {item.name}
              </NavLink> 
              <a target="_blank">
                ，星星數 ： {item.stargazers_count}
              </a>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/"+userName)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(10,result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
          repoDataURL();
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className="App w-150 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <img src={avatarURL} height="200" width="200"></img>
      <h1 className="App container-fluid">
        {githubUsername}
      </h1>
      <a>
        {repoData}
      </a>
      
    </div>
  );
}

export default App;