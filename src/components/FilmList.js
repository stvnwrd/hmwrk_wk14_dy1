import React, { Component } from "react";
import Film from "./Film";

class FilmList extends Component {
  render(){
    const filmNodes = this.props.data.map(film => {
      return (
        
        <Film title={film.title} key={film.id}>
          <a href="./containers/FilmBox">Showtimes</a>
        </Film>
      );
    });
    return <div className="filmList">{filmNodes}</div>;
  }
}

export default FilmList;
