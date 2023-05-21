import React from "react";
import "./navbarB.css";
function Navbar() {
  return (
    <div className="body">
      <nav className="navbar">
        <div className="heading">
              
              <header className="barqu"> 
              <img src=".\images\Star 3.png" alt="" />
               <p>Banquee</p>
               </header>
              <img className="menu-image" src=".\images\menu.png" alt="" />
        </div>

        <div className="container">
          <p className="easy">Easy way to <br /> banking</p>
           <p className="line">We give you both the foundation and flexibility to <br /> build and grow digital capabilities and deliver <br /> customer experiences.</p>

           <button className="start" >Get Started</button>

           <img src=".\images\Hero Image.png" alt="" className="Hero-first" />
           <img src=".\images\Star 2.png" alt="" className="sun-2" />
        </div>
      </nav>

       <div className="image-2-container">
           <img src=".\images\image 2.png" alt="" className="image-names" />
       </div>

    </div>
  );
}

export default Navbar;
