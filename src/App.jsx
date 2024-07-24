import { useEffect, useState } from "react";
import "./App.css";
import loading_image from "/logo.png";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const handle_load = ()=>{
    setLoading(false);
  }
  window.addEventListener("load", handle_load);
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/portfolio",
      element:<Portfolio/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]);

  return (
    <>
      {loading ? (
        <div className="loading-div">
          <img src={loading_image} alt="Loading..." className="loading-logo" />
        </div>
      ):(  
        <>
          <RouterProvider router={router}/>
        </>
      )}

    
    </>
  );
}

export default App;
