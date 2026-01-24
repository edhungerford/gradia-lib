import React, {Component} from "react";

class Recap extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerArray: props.recapData.map(session => session.title),
            details: this.props.details,
            setDetails: this.props.setDetails
        }
    }

    formatStory(session){
        let story = session.story.replaceAll("\n","line-break");
        if(session.features.length > 0){
            session.features.forEach(char => {
                let pos = story.search(char.name);
                if(pos > -1){
                    let storyRight = `${story.substring(pos + char.name.length)}`;
                    let storyLeft = `${story.substring(0, pos)}`
                    let anchor = `link-break${char.name},${char.character_id}link-break`
                    story = storyLeft + anchor + storyRight;
                }
            })
        }
        return this.packageRecap(story);
    }

    createCharLink(name,id){
        return(<a href="#" onClick={() => (this.props.changeName(this.props.charData.find(char => char.id === id)),id)}>{name}</a>)
    }

    packageRecap(story){
        story = story.split("line-break")
        return(<>{story.map(s => {return(<p>{this.packageRecapParagraph(s)}</p>)})}</>)
    }

    packageRecapParagraph(story){
        story = story.split("link-break")
        console.log(story);
        return(<>{story.map((s,i)=>{
            return i % 2 === 0? (<>{s}</>) : (this.createCharLink(s.split(",")[0],Number(s.split(",")[1])))
        })}</>)
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
                                                {this.formatStory(session)}
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

                        <button id="closeRecap" onClick={() => {
                            this.props.setRecapDisplay(false);
                        }}>
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