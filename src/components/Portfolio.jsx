import React from "react";
import Navbar from "./Navbar";
import GoBuy from '/gobuy.png';
import Sasto from '/sasto.png';
import Redchilly from '/redchilly.png';
import Todo from '/todo.png';
import Weather from '/weather.png';
import Guess from '/guess.png';
import Box from "./Box";


export default function Portfolio() {

  const data = [{
    name:"GoBuy",
    img: GoBuy,
    description: "Gobuy is a comprehensive ecommerce platform featuring intuitive admin and user panels, facilitating seamless transactions with integrated payment systems. It offers a diverse range of products and ensures a user-friendly shopping experience with robust backend management.",
    github: "https://github.com/gopalpokhrel1/GoBuy",
    liveDemo:"https://gobuy.netlify.app/"
  },
  {
    name:'Sasto',
    img: Sasto,
    description: "Sasto is an ecommerce platform offering a streamlined shopping experience with a user-friendly cart system. It enables efficient item handling, ensuring a cost-effective and convenient online shopping journey for users.",
    github: "https://github.com/gopalpokhrel1/E-Commerce-Website",
    liveDemo:"https://sasto.netlify.app/"
  },
  {
    name:'Redchilly',
    img: Redchilly,
    description: "RedChilly's website presents a delightful menu of items such as chowmein and momo. Developed with HTML, CSS, and JavaScript, it offers a visually appealing interface for browsing their offerings, enhancing the restaurant's online presence",
    github: "https://github.com/gopalpokhrel1/redChilly",
    liveDemo:"https://red-chilly.netlify.app/"
  },
  {
    name:'Todo',
    img: Todo,
    description: "Todo is a simple web application created using HTML, CSS, and JavaScript. It allows users to manage tasks with features like adding, deleting, and marking tasks as completed, providing a straightforward and efficient task management experience.",
    github: "https://github.com/gopalpokhrel1/TODO_js",
    liveDemo:"https://gopalpokhrel1.github.io/TODO_js/"
  },
  {
    name:'Weather App',
    img: Weather,
    description: "The weather app utilizes HTML, CSS, and JavaScript along with a weather API to display current weather conditions, forecasts, and locations. It provides users with real-time weather updates in a user-friendly interface.",
    github: "https://github.com/gopalpokhrel1/Weather_app",
    liveDemo:"https://gopalpokhrel1.github.io/Weather_app/"
  }, {
    name:'Guess The Number',
    img: Guess,
    description: "Guess the Number is a interactive game built with HTML, CSS, and JavaScript. Players guess a random number within a specified range, receiving feedback until they guess correctly, fostering interactive and engaging gameplay.",
    github: "https://github.com/gopalpokhrel1/Guess-The-Number",
    liveDemo:"https://gopalpokhrel1.github.io/Guess-The-Number/"
  }
]
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="section-heading">
          <div className="section-first-heading">
            <p>Portfolio</p>
            <div className="section-line"></div>
          </div>

          <h2>My Works</h2>
        </div>

        <div className="portfolio-content">
      {data.map((item)=>{
        return(
         <div>
           <Box {...item}/>
         </div>
        )
      })}
        </div>
      </div>
    </>
  );
}
