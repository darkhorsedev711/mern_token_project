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
                <th>Validation Time</th>
                <th>Used Typeform</th>
                <th>Day of Transform</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
                <th>Q5</th>
                <th>Submited Time</th>
              </tr>
              <tr>
                <td rowSpan="2">Typeform</td>
                <td rowSpan="2">May 01</td>
                <td>Q1 A</td>
                <td>Q2 A</td>
                <td>Q3 A</td>
                <td>Q4 A</td>
                <td>Q5 A</td>
                <td>Submit A</td>
              </tr>
              <tr>
                <td>May 02</td>
                <td>Q1 B</td>
                <td>Q2 B</td>
                <td>Q3 B</td>
                <td>Q4 B</td>
                <td>Q5 B</td>
                <td>Submit B</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
