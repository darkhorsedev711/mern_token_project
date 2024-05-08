import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div className="inner-container">
          <div className="title-container">
            <div className="title">Quis Competition Ullsco Laboris Dolore</div>
          </div>
          <div className="personal-info-container">
            <div className="account-title">
              <span>Hi Billy Kane!</span> <p>You Have:</p>
              <div className="first-custom-input">
                <div className="token-value-container">
                  <span className="circle-identifier"></span>
                  <input
                    type="text"
                    className="token-value-input"
                    value="XX Token"
                  />
                </div>
                <input
                  type="text"
                  className="date-value-input"
                  value="dd/mm/yyyy"
                />
              </div>
              <div className="second-custom-input">
                <div className="token-value-container">
                  <span className="circle-identifier"></span>
                  <input
                    type="text"
                    className="token-value-input"
                    value="XX Token Second"
                  />
                </div>
                <input
                  type="text"
                  className="date-value-input"
                  value="dd/mm/yyyy"
                />
              </div>
              <div className="token-info-container">
                <span className="token-info-title">Your Token Amount is:</span>
                <div className="token-amount">160 Tokens</div>
                <button className="token-button">Competition</button>
                <p className="token-explanation">Example explanation</p>
              </div>
            </div>
          </div>
          <div className="token-table-container">
            <table>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
