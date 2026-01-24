import { useEffect, useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';
import Recap from './Recap.jsx';
import { CSSTransition } from "react-transition-group";
import RecapNav from './RecapNav';
import determineHost from './determineHost';

function App() {

  const [headerIndex, setHeaderIndex] = useState(0);
  const [details, setDetails] = useState("");
  const [recapDisplay, setRecapDisplay] = useState(false);

  const [charData, setCharData] = useState([]);
  const [recapData, setRecapData] = useState(false);

  const host = new determineHost();

  useEffect(() => { 
    fetch(`https://gradia.edsite.black/api/${host.determineFetch()}/characters`)
      .then((res) => res.json())
      .then((json) => {
        setCharData(json);
      })

    fetch(`https://gradia.edsite.black/api/${host.determineFetch()}/story`)
      .then((res) => res.json())
      .then((json) => {
        setRecapData(json);
      })
    
      document.title = host.determineTitle();

    }, []);

    const decideToCloseOverlay = () => {
        if(!recapDisplay && window.getComputedStyle(document.querySelector("#infoWrapper")).display === "none"){
          document.querySelector("#recapOverlay").style.display = "none";
        }
    }  

    const changeName = (properties, id=null) => {
      if(id){
        setDetails(charData.find(char => char.id === id))
      } else {
        setDetails(properties);
      }
      document.querySelector("#recapOverlay").style.display = "inline";
      document.querySelector("#infoWrapper").style.display = "inline";
      toggleZIndex(2);
    }

    const toggleZIndex = (which) => {
      if(which === 1){
        document.querySelector("#infoWrapper").style.zIndex = "3"
        if(document.querySelector("#recap"))document.querySelector("#recap").style.zIndex = "4";
      } else if(which === 2) {
        document.querySelector("#infoWrapper").style.zIndex = "4"
        if(document.querySelector("#recap"))document.querySelector("#recap").style.zIndex = "3";
      }
    }

    const displayRecapAndCleanZIndex = () => {
      toggleZIndex(1);
    }

  return (
    <div className={"App " + host.determineFetch()}>
      <div className="container">
        <Header title={host.determineTitle()} />

          <div className="toggleContainer">
              <aside id="recapToggle" onClick={() => {
                setRecapDisplay(true)
                displayRecapAndCleanZIndex();
                document.querySelector("#recapOverlay").style.display = "inline";
                }}>
                <h3>Recap</h3>
              </aside>
          </div>

          <div id="recapOverlay" />

          <CSSTransition
          in={recapDisplay}
          timeout={200}
          classNames="recap"
          unmountOnExit
          onEnter={() => setRecapDisplay(true)}
          onEntered={()=>displayRecapAndCleanZIndex()}
          onExit={() => {
            setRecapDisplay(false);
            decideToCloseOverlay();
          }}>
            <RecapNav headerIndex={headerIndex} setHeaderIndex={setHeaderIndex} recapData={recapData} />
          </CSSTransition>
        
        <CSSTransition 
          in={recapDisplay} 
          timeout={200} 
          classNames="recap"
          unmountOnExit
          onEnter={() => displayRecapAndCleanZIndex()}
          onExit={() => {
            setRecapDisplay(false);
            setHeaderIndex(0);
            decideToCloseOverlay();
          }}>
          <Recap headerIndex={headerIndex} setHeaderIndex={setHeaderIndex} recapDisplay={recapDisplay} setRecapDisplay={setRecapDisplay} recapData={recapData} decideToCloseOverlay={decideToCloseOverlay} changeName={changeName} charData={charData} />
        </CSSTransition>

        <Info details={details} recapDisplay={recapDisplay} setRecapDisplay={setRecapDisplay} displayRecapAndCleanZIndex={displayRecapAndCleanZIndex} decideToCloseOverlay={decideToCloseOverlay}/>
        <main>
          <Grid details={details} setDetails={setDetails} charData={charData} changeName={changeName} />
        </main>    
        <footer>
        <a href="https://www.flaticon.com/free-icons/dragon" title="dragon icons">Dragon favicon created by Freepik - Flaticon</a> | <a href="http://edsite.black">Return to EDSITE</a>
        {/* <br />"Superstition Mountain, Apache Trail, Arizona (no.1), 1929" by George Elbert Burr */}
        </footer>
    </div>
    </div>
  );
}

export default App;
