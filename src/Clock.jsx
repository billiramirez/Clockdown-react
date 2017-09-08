// This Clock Componet is to export to the App Componet for rendering the States of Days,Hour,Minutes,Seconds
// This Componet receive the props a props for the parente component

import React, { Component} from 'react';
import './App.css';

class Clock extends Component{

  constructor(props){
    super(props);

    this.state = {
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }
  }

// This functions is a lyfecicle function of react
// This will execute before the render is loaded the first time the page runs
  componentWillMount() {
        this.getTimeUntil(this.props.deadline);
  }

// This functions is a lyfecicle function of react as well
// This will execute after the render is loaded, when the page is  running
  componentDidMount() {
    setInterval(()=> this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num
  }


// function to substract the deadline and the current date and parse it to a valid data
  getTimeUntil(deadline){
      const time = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60) % 60);
      const hours =  Math.floor(time/(1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));

      this.setState({days, hours, minutes, seconds});

  }


  render() {


    return(

      <div>
          <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
          <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
          <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
          <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
      </div>

    );

  }
}

export default Clock;
