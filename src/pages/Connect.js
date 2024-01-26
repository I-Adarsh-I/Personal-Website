import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import "./connect.css";

function Connect() {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/connect", { mail, msg });
    } catch (err) {
      console.error(`Message could not send: ${err}`);
    }
    navigate("/");
  };

  return (
    <>
    <Navbar />
    <div className="main-container-connect">

      <div className="container connect-parent-container">
        <form onSubmit={sendData} className="connect-form">
          <div className="head">
          <h1 className="text-align-center"> <span className="h">L</span>et's <span className="h">C</span>onnect</h1>
          </div>
          <div className="mb-3">
            
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your email address"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            
            <textarea
              className="form-control mb-3"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <div className="btn-grp">
            <button className="btn btn-outline-secondary card-btn" onClick={(e) => sendData(e)}>
              Send
            </button>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="parent parent-connect">
        <div className="card-main-container">
          <div className="l-con">
            <h1 className="card-head">
              <span className="card-title-span">A</span>
              darsh
            </h1>
            <p className="main-card-description-l leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla
              culpa ea amet est consequuntur quisquam cupiditate eveniet nobis
              quasi?
            </p>
            
          </div>
          <div className="r-connect-con">
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <button
                  className="btn btn-success"
                  onClick={(e) => sendData(e)}
                >
                  Send
                </button>
                
              </div>
            </form>
            <div className="icons">
              <Link
                to="https://www.linkedin.com/in/adarsh-singh-17092b244/"
                target="_blank"
              >
                <AiFillLinkedin className="icon in-icon" />
              </Link>
              <Link to="https://twitter.com/darsh_singh0_0" target="_blank">
                <AiFillTwitterCircle className="icon twitter-icon" />
              </Link>
              <Link to="https://github.com/I-Adarsh-I" target="_blank">
                <AiFillGithub className="icon git-icon" />
              </Link>
              <a href="mailto:adarshsi.info@gmail.com" target="_target">
                <AiFillMail className="icon mail-icon" />
              </a>
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
      <Footer />
    </>
  );
}

export default Connect;
