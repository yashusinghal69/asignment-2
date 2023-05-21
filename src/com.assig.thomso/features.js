import React from "react";
import "./features.css";
function Features() {
  return (
    <>
      <div className="features-heading">
        <h1>
          all features you need <br />
          in one plaCE{" "}
        </h1>
      </div>

      <div className="payment">

        <div className="onilne">
          <img src=".\images\payment-1.png" alt="" />
          <h1>Secure Online Banking</h1>
        </div>
        <div className="automatic">
          <img src=".\images\payment-2.png" alt="" />
          <h1>Automatic Bill <br />
             Payment</h1>
        </div>
        <div className="fees">
          <img src=".\images\payment-3.png" alt="" />
          <h1> No Hidden <br />
          Fees</h1>
          
        </div>
        <div className="card">
          <img src=".\images\payment-4.png" alt="" />
          <h1> Card Payments Anytime </h1>
          
        </div>
      </div>
        

       <section className="digital">
         <div><img src=".\images\pillar.png" alt="" className="pillar" /></div> 
           <div className="content">
            <h3>Go digital now!</h3>
            <p>Our digital platform allows you to access your money from <br /> anywhere, anytime. Which our innovative security features, <br /> and first-in-class service, we combine the best of traditional <br /> banking with a modern convenience of digital banking today</p>
            <button className="start-2" >Get Started</button>
            <img src=".\images\Star 4.png" alt="" className="sun-buller" />
           </div>


       </section>
            
    </>
  );
}

export default Features;
