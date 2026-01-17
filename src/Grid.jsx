import React, {Component} from "react";
import Portrait from "./Portrait";

class Grid extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            details: this.props.details,
            setDetails: this.props.setDetails,
        }
    }

    componentDidMount(){
    }

    render(){
        return(
        <div className="gridContainer">            
            {Array.from(new Set(this.props.charData.map(character => character.affiliation))).map((affiliation) => {
                return(
                    <div key={affiliation}>                    
                        <h1 key={affiliation + "Header"}>{affiliation}</h1>
                        <div key={affiliation} className="grid">
                            {this.props.charData.map(character => {
                                if(affiliation === character.affiliation){
                                    return(
                                        <Portrait key={character.name} properties={character} details={this.props.details} setDetails={this.props.setDetails}/>
                                    )
                                }
                                return("");
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        );
    }
}

export default Grid;