import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navigation/navItems/nav";
import Form from "./components/Navigation/navItems/list";
import State from "./components/Navigation/navItems/state";
import LifeCycle from "./components/Navigation/navItems/lifeCycle";
import Keys from "./components/Navigation/navItems/keys";
import Events from "./components/Navigation/navItems/events";
import Props from "./components/Navigation/navItems/props";
import FluxRedux from "./components/Navigation/navItems/fluxRedux";
import restApi from "./components/Navigation/navItems/restApi";
import Quizzes from "./components/dropdown/quizzes/quizzes";
import Questions from "./components/dropdown/questions/questions";
import Recharts from "./components/dropdown/reCharts";
import VirtualRealDOM from "./components/Navigation/navItems/virtualRealDOM";
import Login from "./components/Login/Login";
import StatefulStateless from "./components/Navigation/navItems/stateful_stateless";
import { BrowserRouter, Route } from "react-router-dom";
import ReactOverView from "./components/Navigation/navItems/reactOverview";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <div>
            <Nav />
              <switch>
                <Route exact path="/" component = {Login}/>
                <Route path="/reactJS" component = {ReactOverView}/>
                <Route path="/form" component = {Form}/>
                <Route path="/statefull_less" component = {StatefulStateless}/>
                <Route path="/state" component = {State}/>
                <Route path="/events" component = {Events}/>
                <Route path="/props" component = {Props}/>
                <Route path="/lifecycle" component = {LifeCycle}/>
                <Route path="/keys" component = {Keys}/>
                <Route path="/flux-redux" component = {FluxRedux}/>
                <Route path="/restApi" component = {restApi}/>
                <Route path="/dom" component = {VirtualRealDOM}/>
                <Route path="/quiz" component = {Quizzes}/>
                <Route path="/qns" component = {Questions}/>
                <Route path="/recharts" component = {Recharts}/>
              </switch>
          </div>
      </BrowserRouter>
  );
  }
}
export default App;