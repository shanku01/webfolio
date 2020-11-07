
import './App.css';
import React,{Component} from "react"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import webMain from "./webMainPhoto.jpg"
import com from "./com.png"
import {Line} from 'react-chartjs-2';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
  return (
    <div className="App">
    <div>
      <ul>
        <li>
          Shashank Pradhan
        </li>
      </ul>
    </div>
    <div className="container-fluid position-relative box2">
        <div className="typewriter" style={{position: "absolute",margin: "30px",marginTop:"10%"}}>
        <h1>Hi,<br/> <span style={{fontSize:"30px"}}>I am Shashank.</span><br/> I draw imgination on<br/>
        <span style={{fontSize:"20px"}}> websites.</span> </h1>
        </div>
        <img src={webMain} style={{width: "100%"}}/>
    </div>
    <div className="container-fluid position-relative">
        <img src={com} className="com"/>
      </div>
    <div className="container-fluid position-relative box">
          <h1 className="heading">Hi there, Nice to meet you.</h1>
          <p>After working on projects for 4 years, I got the secret of a successful project, Always try to make them right instead of work.
I have learnt frontend so I could portray my imagination on the website, which gives me an immense amount of pleasure. Nothing is more peaceful than creating something beautiful.
I have collaborated with different types of people for different types of projects. Which developed team quality in me, it's wonderful when different perspective people come together to serve the common idea.
So if you have any idea/project/website, I would love to be part of that, Feel free to connect me. </p>
    </div>
    <div className="container-fluid position-relative box1">
    <h1 className="heading" style={{color:"rgba(1,1,1,0.8)"}}>MY Professional Advancement</h1>
          <Line
      data={{
        labels:["10th","12th","Logic Building","Web Development","Graduation","Internship","Freelancing"],
      datasets: [{
          data: [2012,2014,2015,2017,2019,2019,2020],
          label:"Year",
          borderWidth: 2,
          borderColor: 'rgba(1,1,1,0.8)',
          pointBorderColor: 'rgba(1,1,1,0.5)',
          backgroundColor:'rgba(0,0,0,0.0)'

      }],
      }}
      width={100}
      height={80}
      options={{
        maintainAspectRatio: false,
        legend:{
          display:false,
        },
        scales: {
      xAxes: [{
          ticks: { display: true ,fontColor: 'rgba(1, 1, 1, 0.8)',fontFamily:"Sofia"},
          gridLines: {
              display: false,
              drawBorder: true
          }
      }],
      yAxes: [{
          ticks: { display: false},
          gridLines: {
              display: false,
              drawBorder: true
          }
      }]
      }
    }
  }/>
  </div>
  <div className="container-fluid position-relative box" style={{marginTop:'150px'}}>
          <h1 className="heading">Hi there, Nice to meet you.</h1>
          <p>After working on projects for 4 years, I got the secret of a successful project, Always try to make them right instead of work.
I have learnt frontend so I could portray my imagination on the website, which gives me an immense amount of pleasure. Nothing is more peaceful than creating something beautiful.
I have collaborated with different types of people for different types of projects. Which developed team quality in me, it's wonderful when different perspective people come together to serve the common idea.
So if you have any idea/project/website, I would love to be part of that, Feel free to connect me. </p>
    </div>
</div>  
  );
}
}

export default App;
