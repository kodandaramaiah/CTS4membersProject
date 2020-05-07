import React, { Component } from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import checkout from './components/checkout'
import paytm from './components/paytm'
import phonepe from './components/phonepe'
import paymentmethods from './components/paymentmethods'
import PaymentSuccessPage from './components/success'


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Redirect from="/Home" to="/" />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/paymentmethods.js" component={paymentmethods}/>
                    <Route path="/checkout" component={checkout}/>
                    <Route path="/paytm" component={paytm}/>
                    
                    <Route path="/phonepe" component={phonepe}/>
                    <Route path="/success" component={PaymentSuccessPage}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;