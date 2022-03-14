import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/app.css";

class Test extends Component {
  public render() {
    return (
      <div>
        <Link to={"/"} children="이전" />
      </div>
    );
  }
}

export default Test;
