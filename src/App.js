import React from "react";
import picture from "./img/profile.png";
import twitter from "./img/Twitter Icon.png";
import facebook from "./img/Facebook Icon.png";
import insta from "./img/Instagram Icon.png";
import git from "./img/GitHub Icon.png";

export default function App(){
  return(

    <section className="businesscard">
      <div className="businesscard__main">
        <img className="businesscard__picture" src={picture} alt="Personal Picture" />
        <h2 className="businesscard__name">Laura Smith</h2>
        <p className="businesscard__profession">Frontend Developer</p>
        <p className="businesscard__website">laurasmith.website</p>
        <div className="businesscard__socialbtn">
          <p className="businesscard__email"><span></span>Email</p>
          <p className="businesscard__linkedin businesscard__linkedin--link"><span></span>LinkedIn</p>
        </div>
        <div className="businesscard__about">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p> 
        </div>
        <div className="businesscard__interests">
          <h3>Interests</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p> 
        </div>
        <ul className="businesscard__footer">
          <li><img className="businesscard__picture" src={twitter} alt="Twitor" /></li>
          <li><img className="businesscard__picture" src={facebook} alt="Facebook" /></li>
          <li><img className="businesscard__picture" src={insta} alt="Instagram" /></li>
          <li><img className="businesscard__picture" src={git} alt="GitHub" /></li>
        </ul>
      </div>
    </section>

  );
}