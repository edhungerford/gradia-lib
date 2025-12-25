import { Component } from "react";

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    discoverSrc(details){
        if(details === "" || details === null || details === undefined ){
            return(<></>);
        } else {
            return(<div id="infoWrapper"><aside id="info">
            <div className="asideText">
                <h1>{details.name}</h1>
                <h3>{details.pronouns}</h3>
                <p><i>{details.description}</i></p>
            </div>
            <img src={details.url} alt={details.name} 
                className="infoPortrait" width="250px" height="250px"></img>
            {details.appearances && <details id="infoAppearances">
            <summary id="appearanceHeader">Appeared in:</summary>
                <ul className="appearanceTable">
                {details.appearances?.map((appearance) => {
                    return <li className="appearanceRow" key={appearance.appearance_id}>{appearance.title}</li>
                })}
                </ul>
            </details>}
            
        </aside><button id="closeInfo" onClick={() => document.querySelector('#infoWrapper').style="display:none;"}>
                        <h2></h2>
                    </button></div>);
        }
    }

    render(){
        return(
            <>
                {this.discoverSrc(this.props.details)}
            </>
        )
    }
}

export default Info;