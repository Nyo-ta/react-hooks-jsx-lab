import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>A guy who has a goal to become succesful</p>
      <img src={image} alt="I made this"/>
    </div>
  )
}

export default About;
