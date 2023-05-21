import React from "react";
import "./Banking.css";
function Banking() {
  return (
    <>
      <header className="header">We take banking personally</header>

      <div className="content-image">
        <section className="content">
          <h1 className="h1">save</h1>
          <p className="p">
            We’re using technology to solve that by automating saving. You set
            an amount to save and we takes care of the rest, prompt interest
            payout included.
          </p>

          <h1 className="h1">spend</h1>
          <p className="p">
            We give you more than one way to pay easily, including a widely
            accepted debit card issued in partnership with Visa, quick web
            payments direct from your account.
          </p>

          <h1 className="h1">send</h1>
          <p className="p">
            From international transfers to on-the-spot payments at market
            stalls, we’ve simplified br sending money so you don’t need to think
            too much about it.
          </p>
        </section>

        <section className="image">
          <img src=".\images\mobile.png" alt="" />
        </section>
      </div>


      <div className="review">
        <h1 className="people">trusted by People all over the world</h1>

        <div className="people-container">
          <section className="people-1">
            <h2>Super user-friendly</h2>
            <p>
              The UI is so intuitive that anyone can use it, without any
              knowledge on the system & I love the financial reports. The tool
              automatically organizes all data and gives us clarity on spend.
            </p>

            <div className="information">
              <img src=".\images\Ellipse 1.png" alt="" />
              <div>
                <h1>William Tromp</h1>
                <p>CTO - Gislason and Sons</p>
              </div>
            </div>
          </section>

          <section className="people-1">
            <h2>Saved hours every week!</h2>
            <p>
              I have been saved so much time on tax calculations. And it gives
              me reliable projections.I love the financial reports. The tool
              automatically organizes all data and gives us clarity on spend.
            </p>

            <div className="information">
              <img src=" .\images\Ellipse 1 (1).png" alt="" />
              <div>
                <h1>Rebecca Emard</h1>
                <p>Founder - Conn Inc</p>
              </div>
            </div>
          </section>

  

        </div>
      </div>
    </>
  );
}

export default Banking;
