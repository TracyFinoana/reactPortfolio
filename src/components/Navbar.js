import React,{ Component } from "react";
import Navitem from "./Navitem";
import { Avatar } from "@mui/material";
import Logo from '../images/LOGO n1.PNG'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  
  render() {
    return (
     <div>
      <nav className="nav-ul">
       
        <ul  >
        <Avatar src={Logo} style={{top:'4.5%',right:'90%', position:'absolute'}} sx={{ width: 50, height: 50 }}/>
        {/* <img src={Logo} style={{top:'4.5%',right:'90%', position:'absolute',width:'70px'}} /> */}
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="Parcours"
            tolink="/parcours"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Projets"
            tolink="/Projet"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Skills"
            tolink="/skills"
            activec={this.activeitem}
          ></Navitem>
          <Navitem item="Mon CV"
          tolink="/cv"
            activec={this.activeitem} >
          </Navitem>
        </ul>
      </nav>
     </div>
    );
  }
}

export default Navbar;
