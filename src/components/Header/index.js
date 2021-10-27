import ThemeContext from "../ThemeContext";
import { Component } from "react";
import {BsYoutube} from "react-icons/bs"
import "./index.css";

class  Header extends Component{
   
 render(){
        return(
        <ThemeContext.Consumer>{
          (value)=>{
              const {theme,changeTheme}=value;
               const changeMode=()=>{
                  if(theme=="light"){
                      changeTheme("dark");
                  }
                  else{
                      changeTheme("light");
                  }
              }
              return(<div className={`header-container ${theme=="light"?"light":"dark"}`}>
                  <div className="logo-container">
                 <h1 className="logo">YTClone</h1>
                  <BsYoutube className="i"/></div>
                  <div className="br"> <button type="button" onClick={changeMode} className={`button ${theme=="light"?"dark":"light"}`}>switch to {theme=="light"?"dark":"light"} mode</button></div>
                 </div>)
          }}
     </ThemeContext.Consumer>
     )
 };
}

export default Header;