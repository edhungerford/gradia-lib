import { Component } from "react";

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    discoverSrc(url){
        console.log(url);
        if(url === "" || url === null || url === undefined){
            return(<></>);
        } else {
            return(<img src={this.props.details.url} alt={this.props.details.name} 
                className="infoPortrait" width="250px" height="250px"></img>);
        }
    }

    render(){
        return(
            <aside id="info">
                <div className="asideText">
                    <h1>{this.props.details.name}</h1>
                    <h3>{this.props.details.pronouns}</h3>
                    <p><i>{this.props.details.description}</i></p>
                    {this.discoverSrc(this.props.details.url)}
                </div>
            </aside>
        )
    }
}

export default Info;