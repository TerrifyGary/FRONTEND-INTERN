import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

import "./InfoPage.css"


function InfoPage() {
  // 參數的宣告。
  // 在這邊，我們需要兩樣東西 : 
  // 1. Repo 主人的名稱
  // 2. Repo 的資訊 { repo名稱、repo星星數 }
  // 除此之外，我也加入 Repo 的頭貼，看起來更像是一個github使用者的介紹。

  const [githubUsername, setGitHubUsername] = useState(); // 用來存取 github 用戶的名稱。
  const [repoData, setRepoData] = useState();             // 用來存取 github Repo 相關的資訊 { 星星數、Repo名稱 }。
  const [avatarURL, setAvatarURL] = useState();           // 用來存取 github 用戶的頭貼。

  const {username} = useParams();  // 抓取 Route 中輸入的 { username }

  async function repoDataURL() {  
    
    // 用 fetch 的方式，抓取 github.api 的 json 資料。
    // 將我們抓取下來的資料 map 成理想的 html 的 list，存入 `repoData`。
    
    await fetch("https://api.github.com/users/"+username+"/repos?_limit=10") 
    .then((res) => res.json())
      .then(
        (result)=>{
          console.log(10, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank">
                repo名稱：                
                <NavLink className="nav-item" to={'/users/'+username+'/repos/'+item.name}>
                  {item.name}
                </NavLink>
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

  // 利用 `useEffect`， 我們可以表現出 components 的副行為。

  useEffect(() => {
    fetch("https://api.github.com/users/"+username)
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

  // 最後，依照理想的樣式，回傳我們要的 html 。
  // 這邊，我們可以利用 `classname` 來做簡單的 css 設定。

  return(
    <div className="infoPage">
      <div className="container">
        <div className="App w-150 min-vh-100 justify-content-center align-items-center d-flex flex-column">
          <img src={avatarURL} height="200" width="200"></img>
          <h1 className="App container-fluid">
            {githubUsername}
          </h1>
          <a>
            {repoData}
          </a>
        </div>
      </div>
    </div>
  )
}

// 我知道，你看到這邊，應該會想問說，那個動態的滾動在哪裡....
// 我真的是盡力惹... 看了很多 InfiniteScroll、Pagination 的文章與教學，我真的是卡關惹... 

// 這作業真的是出得很有水準，嗚嗚嗚嗚.....

export default InfoPage;