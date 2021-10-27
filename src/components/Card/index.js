import {Link} from "react-router-dom";
import "./index.css"

const Card=props=>{
    const {item}=props;
    
 return(
   <Link to={`/cardItem/${item.url.slice(32,)}/${item.title}`} className="ll">
   <li className="li">
     <div className="card-item">
     <img src={item.thumbnail_url} alt="thumbnailUrl" className="thumb-nail"/>
    <div className="content">
     <div className="profile-container"><p className="profile-pic">{item.author_name[0]}</p></div>
      <div className="content-container">
       <p className="title">{item.title}</p>
       <p className="views">{item.author_name} . 73k views . 3 years ago</p>
      </div>
    </div>
     </div>
     </li>  
     </Link>  
 );
}
export default Card;