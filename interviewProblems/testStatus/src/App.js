import React, { Component } from 'react';
import './App.css';

const RUNNING = "Running";
const PASSED = "Passed";
const FAILED = "Failed";

const generateDummyTest = function () {
  var delay = 1000 + Math.random() * 2000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}

class App extends React.Component {
    
  constructor () {
    super();
    this.state = {
      tests: [
        { description: "commas are rotated properly",          run: generateDummyTest(), status: "Not Started Yet" },
        { description: "exclamation points stand up straight", run: generateDummyTest(), status: "Not Started Yet" },
        { description: "run-on sentences don't run forever",   run: generateDummyTest(), status: "Not Started Yet" },
        { description: "question marks curl down, not up",     run: generateDummyTest(), status: "Not Started Yet" },
        { description: "semicolons are adequately waterproof", run: generateDummyTest(), status: "Not Started Yet" },
        { description: "capital letters can do yoga",          run: generateDummyTest(), status: "Not Started Yet" }
      ]
    };
  }

  handleClick () {

    var newState = this.state.tests.map( (test,index) => {

      test.run( (bool) => {
        var newState;

        if (bool === true) {
          newState = this.state.tests.map( (t, i) => {
            if (i === index) {
              return {
                description: t.description,
                run: t.run,
                status: PASSED
              }
            }
            return t;
          });
        } else {
          newState = this.state.tests.map( (t, i) => {
            if (i === index) {
              return {
                description: t.description,
                run: t.run,
                status: FAILED
              }
            }
            return t;
          });
        }

        this.setState({
          tests: newState
        });
        
      });

      return {
        description: test.description,
        run: test.run,
        status: RUNNING
      }

    });

    this.setState({
      tests: newState
    })

  }
  
  render () {

    var status = {
      RUNNING: 0,
      PASSED: 0,
      FAILED: 0
    };

    //sort the tests on each render
    var items = [RUNNING,PASSED,FAILED];
    var data = this.state.tests.slice().sort( (a,b) => {
      return items.indexOf(a.status) > items.indexOf(b.status);
    })
    .map( (test,index) => {
      if (test.status === RUNNING) status.RUNNING++;
      if (test.status === PASSED) status.PASSED++;
      if (test.status === FAILED) status.FAILED++;
      return (<li key={index}>{test.description} -> {test.status}</li>);
    });

    return (
      <div>
        <h1>Tests</h1>

        { (status.RUNNING === 0 && (status.PASSED !== 0 || status.FAILED !== 0)) ? <p>Tests finished</p> : null }

        <ul>
          {data}
        </ul>

        <button onClick={this.handleClick.bind(this)}>Start Tests</button>
        <p>Running: {status.RUNNING}</p>
        <p>Passed: {status.PASSED}</p>
        <p>Failed: {status.FAILED}</p>
      </div>
    )
  }
};


export default App;
