import react, { Component } from "react"
import "./style.css"

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="main-container">
            <div className="container">
                <h1>Name : {this.props.name}</h1>
                <h1>Age : {this.props.age}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </div>
        )
    }

}

export default Card;