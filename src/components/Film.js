import React from "react";

const Film = (props) =>
<div className="film">
  <img src="./favicon.ico" alt=""/>

  <h4 className="filmTitle">{props.title}</h4>
  <h5>{props.children}</h5>
</div>

export default Film;
