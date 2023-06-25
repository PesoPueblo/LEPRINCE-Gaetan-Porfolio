
import "../styles/presentation.css"
import Apropos from "./apropos";

export default function Presentation({titre, text , img}){
    //comportement
 function image() {
    if (img!= null){
        return(
            <img src={img} alt={img} className="photo" />
        )
    }
 }
    return(
        <div>
        <div className="section">
            <div className="content">
                <h1 className="title">{titre}</h1>
                <p className="Text">{text}</p>
            </div>
            {image()}
        </div>
        <Apropos/>
        </div>
    );
}