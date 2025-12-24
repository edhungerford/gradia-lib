class determineHost {

host = window.location.host;

 determineTitle (){
    if(this.host == "bsbs.edsite.black"){
      return "Blue Skies, Black Smoke";
    } else if (this.host == "snaplands.edsite.black"){
        return "South of Snaplands";
    } else if (this.host == "gradia.edsite.black"){
        return "Tails of Gradia";
    } 
    return "Scalesagas";
  }

   determineFetch (){
    if(this.host == "bsbs.edsite.black"){
      return "bsbs";
    } else if (this.host == "snaplands.edsite.black"){
        return "snaplands";
    } else if (this.host == "gradia.edsite.black"){
        return "gradia";
    }
    return "scalesagas";
  }

}

  export default determineHost;