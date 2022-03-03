import React, { useEffect, useState } from "react";
import "./InfoPage.css"

function InfoPage() {
    const [repoFullName, setRepoFullName] = useState();
    const [repoDescription, setRepoDescription] = useState();
    const [repoStar, setRepoStar] = useState();

    let repoName = window.location.pathname;
    let userName ="octocat"
    let repoFetchURL = "https://api.github.com/repos/"+userName+repoName
    let repoURL = "https://github.com/"+userName+repoName

    useEffect(() => {
        fetch(repoFetchURL)
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(10,result);
              setRepoFullName(result.full_name);
              setRepoDescription(result.description);
              setRepoStar(result.stargazers_count);
            },
            (error) => {
              console.log(error);
            }
          );
    }, []);
    return(
        <div className="infoPage">
            <div class="container">
                <div>
                    <p></p>
                    <p class="font-weight-light">Repo Full Name：{repoFullName}</p>
                    <p></p>
                    <p class="font-weight-light">Repo Description：</p>
                    <p>{repoDescription}</p>
                    <p></p>
                    <p class="font-weight-light">Repo Stars：{repoStar}</p>
                    <p></p>
                    <p>
                        Repo Link：
                        <a href={repoURL}>{repoURL}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage;