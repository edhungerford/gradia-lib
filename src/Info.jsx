import { Component } from "react";

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {
            recapDisplay: this.props.recapDisplay,
            setRecapDisplay: this.props.setRecapDisplay,
            displayRecapAndCleanZIndex: this.props.displayRecapAndCleanZIndex
        };
    }

    discoverSrc(details){
        if(details === "" || details === null || details === undefined ){
            return(<div id="infoWrapper"></div>);
        } else {
            return(
                    <div id="infoWrapper">
                        <aside id="info">
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
                                    return (
                                        <a key={appearance.title} href={"#" + appearance.title}>
                                            <li className="appearanceRow" key={appearance.appearance_id} onClick={() => {
                                                this.state.setRecapDisplay(true);
                                                this.state.displayRecapAndCleanZIndex()
                                            }}>{appearance.title}</li>
                                        </a>
                                        )
                                    })}
                                </ul>
                            </details>}
                        </aside>
                        <button id="closeInfo" onClick={() => {
                            document.querySelector("#infoWrapper").style.display = "none";
                            this.props.decideToCloseOverlay();
                            }}>
                            <h2></h2>
                        </button>
                    </div>
            );
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