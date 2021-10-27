import { Component } from 'react';
import YouTube from 'react-youtube';
import Header from "../Header";
import "./index.css";
class CardItem extends Component{
render(){
    const opts = {
        height: '500',//300
        width: '1000', //500
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          origin: 'http://localhost:3000' 
        },
    }
    const {match} = this.props;
    const {params} = match;
    const {id,title}=params;
    return(
       <div>
        <Header/>
        <div className="item-container">
         <YouTube videoId={id} opts={opts} onReady={this._onReady} className="yt-container"/>;
         <h1 className="head">{title}</h1>
        </div>
       </div>
    );
}
}

export default CardItem;