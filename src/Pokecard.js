import React, {Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component{
    render(){
        return(
            <div className="pokecard">
                <span className="name">{this.props.name}</span><br />
                {this.props.type}<br />
                <p className="exp">Exp: {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard;