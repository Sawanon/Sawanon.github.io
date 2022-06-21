import React from "react";

function Home({}) {
  return (
    <div className="container">
      <div className="img-container">
        <img
          className="img-self"
          src="../src/assets/IMG_2503.png"
          width={300}
        />
      </div>
      <div className="left-side">
        <div className="header-name-text">Non</div>
        <div className="header-container light">Profile</div>
        <div className="content-container content-light">
          I am now a software developer at AAPICO. I can work as a theme. I
          currently do the front-end and back-end, and also do both web and
          mobile.
        </div>
      </div>
      <div className="right-side">right</div>
    </div>
  );
}

export default Home;
