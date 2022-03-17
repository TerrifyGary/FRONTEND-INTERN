import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";

import "./RepoPage.css"

// Repo 頁面。
// 與第一頁所使用方式幾乎一樣。
// 這邊主要是路徑寫對了，接收 reponame。

function RepoPage() {
  const [repoFullName, setRepoFullName] = useState();       // Repo 的全名 (包含使用者的名稱) 
  const [repoDescription, setRepoDescription] = useState(); // Repo 的敘述
  const [repoStargazers, setRepoStargazers] = useState();   // Repo 的星星數
  const {username, repo} = useParams();                     // 抓取頁面的 username 和 repo 名稱

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

  // 回傳 html。
  // 這邊是我設計的。
  // 沒有輟，又是熊熊遇見你的GIF，真的很可愛對吧。

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