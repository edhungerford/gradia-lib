import React, {Component} from "react";

class Recap extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerArray: props.recapData.map(session => session.title)
        }
    }

    render(){
        return(
            <div id="recap">
                <div id="recapWrapper">
                    {Array.from(new Set(this.props.recapData.map(item => item.act))).map((act) =>{
                        return(
                            <div key={act}>
                                <header key={act+"Header"} style={{ "boxShadow": `none`, "marginTop": "0"}}><h1>{act}</h1></header>
                                <div key={act} id={act} style={{"scrollMarginTop": "90px"}}></div>
                                {this.props.recapData.map(session => {
                                    if(session.act === act){
                                        return(
                                            <div key={session.id} className="sandwich" style={{ "boxShadow": `none`}}>
                                                <h2 key={session.id} id={session.title} className="recapHeader">{session.title}</h2>
                                                {session.story.split("\n").map((story, index) => {
                                                    return <p key={index}>{story}</p>
                                                })}
                                                <p key={session.id + "Stinger"} className="stinger"><i>{session.stinger}</i></p>
                                            </div>
                                        )
                                    } else return("");
                                })}
                                
                            </div>
                        )
                    })}
                    <div className="sandwichEnd" style={{ "boxShadow": `none`}}>
                        {/* <a href={"#" + this.state.headerArray[this.props.headerIndex - 1]}>
                            <button onClick={() => this.props.setHeaderIndex((this.props.headerIndex -1) < 0? this.state.headerArray.length - 1 : this.props.headerIndex - 1)} id="prev">
                                <h2>&#60;&#60;</h2>
                            </button>
                        </a> */}

                        <button id="closeRecap" onClick={() => this.props.setRecapDisplay(false)}>
                            <h2>Close Recap</h2>
                        </button>

                        {/* <a href={"#" + this.state.headerArray[this.props.headerIndex + 1]}>
                            <button onClick={() => this.props.setHeaderIndex((this.props.headerIndex + 1) > this.state.headerArray.length - 1? 0 : this.props.headerIndex + 1)} id="next">
                                <h2>&#62;&#62;</h2>
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Recap;