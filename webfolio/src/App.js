
import './App.css';
import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import webMain from "./webMainPhoto.jpg"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      imgData:webMain,
    }
  }

  render(){
  return (
    <div className="App">
      <nav id="top" className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
    <div className="navbar-brand"> 
      <a className="nav-link" style={{color: "black"}} href="#home">
        SHASHANK PRADHAN
      </a> 
    </div> 
    <ul className="navbar-nav ml-auto"> 
            <li className="nav-item"> 
                <a className="nav-link" href="#projects"> 
                  PROJECTS 
                </a> 
            </li> 
            <li className="nav-item"> 
                <a className="nav-link" href="#about"> 
                  ABOUT 
                </a> 
            </li> 
            <li className="nav-item"> 
                <a className="nav-link" href="#bottom"> 
                  CONTACTS
                </a> 
            </li> 
        </ul> 
    </nav> 
    <div className="container-fluid position-relative" style={{marginTop:"5%"}} id="home">
      <div className="container-fluid">
        <div className="typewriter" style={{position: "absolute",margin: "1em",marginTop:"10%"}}>
        <h1>Hi,<br/> <span style={{fontSize:"2em"}}>I am Shashank.</span><br/> I draw imgination on<br/>
        <span style={{fontSize:"1.5em"}}> websites.</span> </h1>
        </div>
        <img src={this.state.imgData} style={{width: "100%",borderRadius:"5%"}}/>
      </div>
    <nav id="bottom"className="navbar fixed-bottom row navbar-dark bg-dark" style={{color: "white"}}>
        <i className="fa fa-copyright col-sm-5" >2020 Shashank Pradhan</i>
        <span className="col-sm-5" >Email - Shashankpradhan911@gmail.com</span> 
        <div className="col-sm-2">
          <div className="row">
            <i className="fa fa-linkedin col-sm-4"></i>
            <i className="fa fa-twitter col-sm-4"></i>
            <i className="fa fa-github col-sm-4"></i>
          </div>
        </div>
    </nav>
    </div>
    </div>
  );
}
}

export default App;
