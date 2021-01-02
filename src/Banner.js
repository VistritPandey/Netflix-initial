import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  //I have hide my requests...

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "Cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center cemter",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Test</h1>

        <div className="banner__button">
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lists</button>
        </div>

        <h1 className="banner__description">Test</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
