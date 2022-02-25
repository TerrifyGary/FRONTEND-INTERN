import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();

  // ------------------------------- //
  const [repoStar, setRepoStar] = useState();
  // ------------------------------- //

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/TerrifyGary/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(10, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank">
                repo名稱：  
              </a>
              <a target="_blank" href={item.svn_url}> 
                {item.name}
              </a>
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
    fetch("https://api.github.com/users/TerrifyGary")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
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
      <img src={avatarURL}></img>
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