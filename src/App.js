import { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import CardList from './components/CardList'; 
import CardItem from "./components/CardItem";
import ThemeContext from './components/ThemeContext';
import './App.css';
class App extends Component{
  state={theme:"light"}
  changeMode=theme=>{
    this.setState({theme});
  }
  render(){
    const {theme}=this.state;
    const themeClass=theme=="light"?"light":"dark";
  return (
    <ThemeContext.Provider value={{theme,changeTheme:this.changeMode}}>
    <div className={`root-container ${themeClass}`}>
     <BrowserRouter>
    <Route exact path="/" component={CardList}/>
    <Route exact path="/cardItem/:id/:title" component={CardItem}/>
    </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  )
  };
}

export default App;
