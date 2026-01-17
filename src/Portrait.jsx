import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Portrait(props){
    
    const [properties] = useState(props.properties)
    const [portraitDisplay, setPortraitDisplay] = useState(false);

    const changeName = () => {
        props.setDetails(properties);
        document.querySelector('#infoOverlay').style = "display:auto;"
    }    

    useEffect(() =>{
        setPortraitDisplay(true);
    }, [])

    return(
        <CSSTransition
            in={portraitDisplay}
            timeout={500}
            classNames="portraitAnim"
            unmountOnExit
            onEnter={() => setPortraitDisplay(true)}
            onExit={() => setPortraitDisplay(false)}>
            <div className="portrait">
                <div className="tint" onClick={changeName} />
                <div className="portrait-content">
                    <img src={properties.url} alt={properties.name}></img>
                </div>
            </div>
        </CSSTransition>
    );
    
}

export default Portrait;