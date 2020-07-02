import React, { Component } from "react";
import {Link} from "react-router-dom";
import DropDown from "../../dropdown/dropDown";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link className="navbar-brand" to={"/"}>
          <img src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" className="logo"></img>
        </Link>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link text-info" to={"/reactJS"}>
              ReactJS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/form"}>
              Forms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/statefull_less"}>
              Stateful/Stateless
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/state"}>
              State
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/props"}>
              Props
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/events"}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/lifecycle"}>
              Lifecycle Methods
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/keys"}>
              Keys
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/flux-redux"}>
            Flux vs Redux
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/restApi"}>
            RESTful API
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/dom"}>
           DOM
            </Link>
          </li>
          <li className="nav-item">
            <DropDown/>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
