import React from "react";
import "./Question.css";
function Question() {
  return (
    <>
      <section className="question">
        <h1>frequently asked question</h1>

        <div className="ques-1">
          <p>How much would it require to open an account ?</p>
          <div className="plus">+</div>
        </div>
        <div className="ques-1">
          <p>Is there a minimum operational cost ?</p>
          <div className="plus">+</div>
        </div>
        <div className="ques-1">
          <p>where can i use my debit cards ?</p>
          <div className="plus">+</div>
        </div>
        <div className="ques-1">
          <p>how much do i get as interest on savings ?</p>
          <div className="plus">+</div>
        </div>
      </section>

      <div className="subscribe">
        <header>
          <h1> subscribe to our newsletter for a 10% bonus on transactions </h1>
          <img src=".\images\Star 2.png" alt="" />
        </header>
        <form action="">
          <input type="text" placeholder="Your email address" />
      <button className="subs">SUBSCRIBE</button>
        </form>
      </div>


    </>
  );
}

export default Question;
