import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './component/home/home';
import Classfiy from './component/classfiy/classfiy';
import Shoppingcart from './component/shoppingcart/shoppingcart';
import Mine from './component/mine/mine';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/classfiy" component={Classfiy}></Route>
                <Route path="/shoppingcart" component={Shoppingcart}></Route>
                <Route path="/mine" component={Mine}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </div>
    );
  }
}
App = withRouter(App);
export default App;
