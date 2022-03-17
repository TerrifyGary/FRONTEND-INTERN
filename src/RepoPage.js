import React, { useEffect, useState } from "react";

import {
  useParams
} from "react-router-dom";

import "./RepoPage.css"

function RepoPage() {
  const [repoFullName, setRepoFullName] = useState();
  const [repoDescription, setRepoDescription] = useState();
  const [repoStargazers, setRepoStargazers] = useState();
  const {username, repo} = useParams();

  let repoURL = "https://github.com/"+username+"/"+repo;
  console.log(repo);

  useEffect(() => {
    fetch("https://api.github.com/repos/"+username+'/'+repo)
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(10,result);
        setRepoFullName(result.full_name);
        setRepoDescription(result.description);
        setRepoStargazers(result.stargazers_count);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return(
    <div className="App w-150 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <img src="https://tenor.com/view/we-bare-bears-eating-noodles-gif-14119190.gif" width="268" height="300"/>
      <p></p>
      <p></p>
      <div class="repo__full__name">
        Repo FullName：{repoFullName}
      </div>
      <p></p>
      <div class="repo__description">
        Repo Description：{repoDescription}
      </div>
      <p></p>
      <div class="repo__stargazers__count">
        Repo Star：{repoStargazers}
      </div>
      <p></p>
      <div class="repo__stargazers__count">
        Repo URL：
        <a href={repoURL}>{repoURL}</a>
      </div>
      <p></p>
      <div>
            Go Back <a href="/home">Home</a>.
      </div>
    </div>
    
  )
}

export default RepoPage;