import React, { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import Projet from "./contents/Projet";
import Education from "./contents/education";
import CV from "./contents/CV";
import Languages from "./contents/ParcoursLanguages";
import { Sling as Hamburger } from "hamburger-react";
import { HashLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";
import Logo from './images/LOGO n1.PNG'
import { Avatar } from "@mui/material";
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};

  .thumbnail::before{
    box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e;"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288)"};
      background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
      border-radius: 20px;
    }
  .social-share li a  {
    box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e;"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288)"};
      background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
      border-radius: 20px;
    }
  .btnsame,.resume-single-list{
    box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e;"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288)"};
      background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
    }
  .condiv{
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  nav{
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")}
  }
  nav ul li{
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e;"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288)"};
  }
  nav ul li:hover{
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "15px 15px 24px #1c1e22,  -15px -15px 24px #262a2e;"
      : "5px 5px 15px #919396, -5px -5px 15px #ffffff;"}
  }
  nav ul li:checked{
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset"
      : "5px 5px 15px #919396, -5px -5px 15px #ffffff;"}
  }
  .social{
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset"
      : "inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"}
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
  }
  .social-share-style-1 .social-share li a {
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset"
      : "5px 5px 15px #919396, -5px -5px 15px #ffffff;"}
    background-color: ${(props) =>
    props.theme.mode === "dark"
      ? "linear-gradient(145deg, #1e2024, #23272b)"
      : "#dde1e7;"}
  }
  .btnsame, .personal-experience-inner .experience-list .resume-single-list:hover .inner .heading .date-of-time span  {
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288);"}
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
  }
  .resume-single-list:hover::before{
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288);"}
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7;"}
  }
  a{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    
  }
  .back1,.popup-mobile-menu .inner {
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e;"
      : "-3px -3px 7px #ffffff73, 3px 3px 5px rgba(18, 18, 19, 0.288)"};
  }
  .appear ,.date-of-time,.rn-blog  {
    border-radius: 10px;
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "15px 15px 24px #1c1e22,  -15px -15px 24px #262a2e;"
      : "5px 5px 15px #919396, -5px -5px 15px #ffffff;"}

  }
  .back1:hover{
    box-shadow:  ${(props) =>
    props.theme.mode === "dark"
      ? "15px 15px 24px #1c1e22,  -15px -15px 24px #262a2e;"
      : "5px 5px 15px #919396, -5px -5px 15px #ffffff;"}
  }
.active{
  box-shadow: ${(props) =>
    props.theme.mode === "dark"
      ? "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;"
      : "inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(18, 18, 19, 0.288;"}

  .social{
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .btnsame{
    background-color: ${(props) =>
    props.theme.mode === "dark" ? "#212428" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
`;
function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  const [open, setOPen] = useState("popup-mobile-menu");
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ThemeProvider theme={theme}>
        {/* {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: " translate(-50%, -50%)",
            }}
          >
            <HashLoader color="#fd4520" size="100px" />
          </div>
        ) : ( */}
        <>
          <GlobalStyle />

          <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about"></Route>
              <Route path="/Projet">
                <Projet />
              </Route>
              <Route path="/parcours">
                <Education />
              </Route>
              <Route path="/skills">
                <Languages />
              </Route>
              <Route path="/cv">
                <CV />
              </Route>
              <div className="Hamburger" >
                <Hamburger
                  size={30}
                  color="#fd4520"
                  rounded                
                  toggled={toggle1}
                  toggle={setToggle2}
                  onToggle={(toggled) => {
                    if (toggled) {
                      setOPen("popup-mobile-menu menu-open");
                    } else {
                      setOPen("popup-mobile-menu");
                    }
                  }}
                />
              </div>
              <div
                class="back1"
                onClick={(e) =>
                  setTheme(
                    theme.mode === "dark"
                      ? { mode: "light" }
                      : { mode: "dark" }
                  )
                }
              >
                <i
                  class={
                    theme.mode === "dark" ? "fa fa-sun i1" : "fa fa-moon i1"
                  }
                ></i>
              </div>

              <div class={open}>
                <div class="inner">
                  <div class="menu-top">
                    <div class="menu-header">
                      <a class="logo">
                        <Avatar src={Logo} sx={{ width: 50, height: 50 }} />
                      </a>
                      <div class="close-button">
                        <Hamburger
                          size={30}
                          color="#fd4520"
                          rounded
                          toggled={toggle2}
                          toggle={setToggle1}
                          onToggle={(toggled) => {
                            if (toggled) {
                              setOPen("popup-mobile-menu menu-open");
                            } else {
                              setOPen("popup-mobile-menu");
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <Switch>
                      <ul class="primary-menu nav nav-pills" style={{top:'10px'}}>
                        <Link to="/" >
                          <li class="nav-item">
                            <button
                              style={{ color: "#fd4520" ,borderColor:'transparent' }}
                              class="nav-link smoth-animation "
                              onClick={(e) => { setOPen("popup-mobile-menu") }}
                            >
                              Home
                            </button>
                          </li>
                        </Link>
                        <Link to="/parcours">
                          <li class="nav-item">
                            <button
                              style={{ color: "#fd4520", borderColor:'transparent' }}
                              class="nav-link smoth-animation"
                              onClick={(e) => { setOPen("popup-mobile-menu") }}
                            >
                              Parcours
                            </button>
                          </li>
                        </Link>
                        <Link to="/Projet">
                          <li class="nav-item">
                            <button
                              style={{ color: "#fd4520" , borderColor:'transparent'}}
                              class="nav-link smoth-animation"
                              onClick={(e) => { setOPen("popup-mobile-menu") }}
                            >
                              Projets
                            </button>
                          </li>
                        </Link>
                        <Link to="/skills">
                          <li class="nav-item">
                            <button
                              style={{ color: "#fd4520" , borderColor:'transparent'}}
                              class="nav-link smoth-animation"
                              onClick={(e) => { setOPen("popup-mobile-menu") }}
                            >
                              Skills
                            </button>
                          </li>
                        </Link>
                        <Link to="/cv">
                          <li class="nav-item">
                            <button
                              style={{ color: "#fd4520" , borderColor:'transparent'}}
                              class="nav-link smoth-animation"
                              onClick={(e) => { setOPen("popup-mobile-menu") }}
                            >
                              Mon CV
                            </button>
                          </li>
                          {/* </Route> */}
                        </Link>

                        <li class="nav-item">
                          <button
                            style={{ color: "#fd4520" , borderColor:'transparent', marginBottom:'10px'}}
                            class="nav-link smoth-animation back1"
                            onClick={(e) =>
                              setTheme(
                                theme.mode === "dark"
                                  ? { mode: "light" }
                                  : { mode: "dark" }
                              )
                            }
                          >
                            <i
                              class={
                                theme.mode === "dark"
                                  ? "fa fa-sun i1"
                                  : "fa fa-moon i1"
                              }
                            ></i>
                          </button>
                        </li>
                      </ul>
                    </Switch>

                    <div class="social-share-style-1 mt--40" style={{alignSelf:'center'}}>
                      <span class="title" >Trouvez-moi ici:</span>
                      <ul class="social-share d-flex liststyle" >
                        <li class="facebook">
                          <a
                            target="blank"
                            href="https://www.facebook.com/najoroarivelo.nambinintsoafinoana"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                        </li>
                        <li class="instagram">
                          <a
                            target="blank"
                            href="https://www.instagram.com/finoana22/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </a>
                        </li>
                        <li class="linkedin">
                          <a
                            target="blank"
                            href="https://www.linkedin.com/in/nambinintsoa-finoana-najoroarivelo-86396120a/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </>
        {/* )} */}
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
