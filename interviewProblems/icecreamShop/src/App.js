import React, { Component } from 'react';
import './App.css';

const flavors = ["Vanilla", "Pistachio", "Chocolate", "Mint", "Coffee", "Salted Caramel", "Butterscotch", "Rocky Road", "Green Tea", "Peanut Butter Fudge"];

const randomNum = function () {
  return Math.floor(Math.random()*5)+1;
};

const addPrice = function () {
  var data = {};
  for (var i = 0; i < flavors.length; i++) {
    data[flavors[i]] = {
      cost: randomNum(),
      quantity: 0
    }
  }
  return data;
}

class App extends React.Component {
    
  constructor () {
    super();
    this.state = {
      icecreams: addPrice()
    }
  }
  
  handleAdd (key) {
    var newIcecreams = Object.assign({},this.state.icecreams);
    newIcecreams[key].quantity += 1;
    this.setState({
      icecreams: newIcecreams
    });
  }
  
  handleRemove (key) {
    var newIcecreams = Object.assign({},this.state.icecreams);
    newIcecreams[key].quantity -= 1;
    this.setState({
      icecreams: newIcecreams  
    });
  }

  getTotalCost () {
    var total = 0;
    for(var key in this.state.icecreams) {
      total += this.state.icecreams[key].quantity * this.state.icecreams[key].cost;
    }
    return total;
  }
  
  render() {
     
    var icecreams = [];

    for(var key in this.state.icecreams) {
      icecreams.push(
                      <li key={key}>
                        {key}
                        <button onClick={this.handleAdd.bind(this, key)}>Add</button>
                        {this.state.icecreams[key].quantity > 0 ? <button onClick={this.handleRemove.bind(this, key)}>Remove</button> :null}
                      </li>
                    );
    }
    
    return (
      <div>
        <h1>Welcome to my Ice Cream Shop!</h1>
        <ul>
          {icecreams}
        </ul>
        
        <h3>Total cost: {this.getTotalCost()}</h3>
      </div>
    )
  }
}

export default App;

  

  




