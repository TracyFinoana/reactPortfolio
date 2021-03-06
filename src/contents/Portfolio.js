import React,{ Component } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
import {motion} from 'framer-motion'
class Portfolio extends Component {
  render() {
    return (
      <motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
>
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser">
              <img
                src={project1}
                className="po1"
                alt="AlgoSort Sorting Visualiser"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page">
              <img
                src={project2}
                className="po1"
                alt="Shoes Nike Landing page"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/To-do-list-v2">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
            <a href="https://github.com/vikalp2502/Tribute-to-msd">
              <img src={project4} className="po1" alt="Tribute to MSD"></img>
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    );
  }
}

export default Portfolio;
