import React from "react";
import Navbar from "./Navbar";
import user_image from "/user-img.png";
import right_arrow from "/right.png";
import "../App.css";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="page">
        <div className="section-heading">
          <div className="section-first-heading">
            <p>About</p>
            <div className="section-line"></div>
          </div>

          <h2>Learn More About Me</h2>
        </div>

        <div className="about-content-section">
          <div className="about-section-image">
            <img src={user_image} alt="photo" />
          </div>
          <div className="user-description">
            <div className="description-heading">
              <h1>Fullstack Developer</h1>
              <p>
                Empowering digital experiences from front-end finesse to
                back-end brilliance. Let's build your vision together!
              </p>
            </div>
            <div className="user-details">
              <div className="user-details-left">
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Birthday : <span>28 Aug 2002</span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    website : <span></span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Phone : <span>+9779866202294</span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    City : <span>Bhaktapur</span>
                  </h4>
                </div>
              </div>
              <div className="user-details-right">
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Age : <span>22</span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Email : <span>gopalpokhrel101@gmail.com</span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Degree: <span>Bachelor's Running</span>
                  </h4>
                </div>
                <div>
                  <img src={right_arrow} alt="arrow" />
                  <h4>
                    Freelance : <span>Available</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="user-info">
              <p>
                Hello, I'm Gopal Pokhrel, a dedicated BSc.CSIT student at Bhaktapur Multiple Campus. I am deeply passionate about becoming a full-stack developer, driven by my curiosity and love for creating innovative solutions. Through my studies and personal projects, I am constantly honing my skills in both front-end and back-end development, aiming to contribute meaningfully to the world of technology.
              </p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="skills-heading">
               <p>Skills</p>
               <div className="skills-section-line"></div>
          </div>

          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>HTML</h4>
                <h4>100%</h4>
              </div>
              <div className="skills-line">
                <div className="html-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>CSS</h4>
                <h4>70%</h4>
              </div>
              <div className="skills-line">
                <div className="css-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Tailwind</h4>
                <h4>70%</h4>
              </div>
              <div className="skills-line">
                <div className="tailwind-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Bootstrap</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="bootstrap-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Javascript</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="javascript-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Typescript</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="typescript-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>React</h4>
                <h4>70%</h4>
              </div>
              <div className="skills-line">
                <div className="react-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Next Js</h4>
                <h4>50%</h4>
              </div>
              <div className="skills-line">
                <div className="next-js-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Node Js</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="node-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Express Js</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="express-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Prisma</h4>
                <h4>40%</h4>
              </div>
              <div className="skills-line">
                <div className="prisma-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>MongoDB</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="mongo-line"></div>
              </div>
            </div>

          </div>
          <div className="skills-row">
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Github</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="github-line"></div>
              </div>
            </div>
            <div className="skills-descriptions">
              <div className="skills-title">
                <h4>Git</h4>
                <h4>60%</h4>
              </div>
              <div className="skills-line">
                <div className="git-line"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
