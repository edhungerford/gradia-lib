import React, {Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    render(){
        return(
            <header>
                <h1>{this.state.title}</h1>
                <h4>Dramatis Personae</h4>
            </header>
        );
    }
}

export default Header;