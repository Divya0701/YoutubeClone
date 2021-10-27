import Header from "../Header";
import { Component } from "react";
import Card from "../Card";
import "./index.css";
const ids=["EqOSFhIKbRg","yjT7bSdwUMg","SEejivHRIbE","izcLewugGls","vn1-YU8n_MU","FJ3N_2r6R-o","AWFaj4IQ4ro","dmFwB0WEEDY","3eGP6im8AZA","XdKwWyamAlA","K6RO38U_ycg","__cjZ43g7-0","dK2rxOVcH38","vlgvAM7B9v0","tJXPfNDVF4I"];
const id=["EqOSFhIKbRg"];
class CardList extends Component{
    state={data_list:[]}
    componentDidMount(){ 
        for(let item of ids){
            this.getData(item);
        }   
    }
    getData=async(i)=>{
         const response=await fetch("https://noembed.com/embed?url=https://www.youtube.com/watch?v="+i)
         const data = await response.json();
         this.setState(prevState=>({data_list:[...prevState.data_list,data]}));
    }


render(){
    const {data_list} = this.state
    return(
       <div>
           <div>
           <Header/>
           </div>
          <ul className="cards-list">
              {data_list.map((eachItem)=><Card item={eachItem} key={eachItem.title}/>)}
          </ul>
       </div>
    );
}
}

export default CardList;