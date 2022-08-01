import React from "react";

const Hero = () => {
  return (
    <main className="main-hero min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto p-10 py-20">
        <div className="flex flex-col justify-center space-y-5  h-full">
          <h1 className="text-white text-4xl font-extrabold text-justify">
            Introducing The Easy &#38; <br /> Fast way to send Money
          </h1>
          <p className="text-lg font-semibold text-white text-justify mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis molestias reiciendis, vitae molestiae enim rem maxime ab
            minima dicta voluptatum soluta autem.
          </p>
          <div className="bg-white rounded flex items-center justify-center font-semibold text-[#1894F8] w-[142px] h-[48px]">
            Get Started
          </div>
        </div>
        <div className="flex justify-center">
          <div className="card">
            <div className="card-header">
              <h6>Exchange Rate</h6>
              <h2>
                <strong>GBP 1 = 459 NGN</strong>
              </h2>
            </div>
            <div className="card-body">
              <form action>
                <div className="input-box">
                  <input
                    type="text"
                    className="payment-input"
                    placeholder="You Send"
                  />
                  <div className="currency-select">
                    <div className="select-box">
                      <div className="select-items">
                        <img src="/uk.svg" className="svg-icon" alt />
                        <span>NGN</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="payment-input"
                    placeholder="Receipient gets"
                  />
                  <div className="currency-select">
                    <div className="select-box">
                      <div className="select-items">
                        <img src="/ng.svg" className="svg-icon" alt />
                        <span>NGN</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="just-div">
                  <p>Delivery Method</p>
                  <select name id className>
                    <option value={1}>Bank Transfer</option>
                  </select>
                </div>
                <div className="just-div">
                  <p>Include Fees</p>
                  <input type="checkbox" />
                </div>
                <div className="just-div">
                  <p>Fee</p>
                  <p>GBP 1.00</p>
                </div>
                <div className="just-div">
                  <h3>Total to pay</h3>
                  <h3>GBP 1,001.00</h3>
                </div>
                <button className="btn-block">Continue</button>
              </form>
              <div className="fees-notice">
                <p>“TRANSACTION FEES MAY APPLY”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
