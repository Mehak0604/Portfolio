import React from "react";
import "./Cover.css";

export default function Cover() {
  return (
    <section className="cover">
      <div className="overlay">
        <h1 className="cover-title">Hi, I'm <span>Mahak</span></h1>
        <p className="cover-subtitle">Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="cover-btn">Explore My Work</a>
      </div>
    </section>
  );
}
