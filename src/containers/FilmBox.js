import React, { Component } from "react";
import FilmList from "../components/FilmList";

class FilmBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{ id: 1, title: "First Blood", showtimes: "7:30"}, { id: 2, title: "Look Who's Talking Too", showtimes: "8:30"}, { id: 3, title: "The Third Man", showtimes: "9:30"}, { id: 4, title: "The Muppet Christmas Carol", showtimes: "10:00"}]
    };
  }
  render(){
    return(
      <div>
        <div className="filmBox">
          <h2>UK Opening This Week</h2>
          <FilmList data={this.state.data} />
          <a href="">See more opening this week.</a>
        </div>
        <div className="blahblah">
          <button>Get Showtimes>> </button>
        </div>
      </div>
    );
  }
}

export default FilmBox;
