class determineHost {

host = window.location.host;

 determineTitle (){
    if(this.host === "bsbs.edsite.black"){
      return "Blue Skies, Black Smoke";
    } else if (this.host === "snaplands.edsite.black"){
        return "South of Snaplands";
    } else if (this.host === "gradia.edsite.black"){
        return "Tails of Gradia";
    } else if (this.host === "scalesagas.edsite.black"){
      return "Scalesagas";
    }
    return "Scalesagas";
  }

   determineFetch (){
    if(this.host === "bsbs.edsite.black"){
      return "bsbs";
    } else if (this.host === "snaplands.edsite.black"){
        return "snaplands";
    } else if (this.host === "gradia.edsite.black"){
        return "gradia";
    } else if (this.host === "scalesagas.edsite.black"){
      return "scalesagas";
    }
    return "scalesagas";
  }

}

  export default determineHost;