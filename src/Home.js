import React, { useEffect, useState } from "react";

function Home(){
    // 主畫面。
    // 希望您會喜歡「熊熊遇見你」的可愛GIF。
    
    return(
        <div className="App w-150 min-vh-100 justify-content-center align-items-center d-flex flex-column">
            <h1>
                &#127817; This is home page. &#127817;
            </h1>
            <p></p>
            <h2>
                Use：
                <code>
                /users/&#123;
                <a href="/users/octocat/repos">
                username
                </a>
                &#125;/repos
                </code>
            </h2>            
            <p></p>
            <img src="https://c.tenor.com/iWLsn4hcyRcAAAAC/bare-bears-we-bare-bears.gif" width="622.5" height="350"/>
            <p></p>
            <h3>
                &#127822; Have a nice day &#60;&#51;. &#127822;
            </h3>
            
        </div>
    )
}

export default Home;