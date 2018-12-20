import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {Row, Col} from 'react-materialize';

class App extends Component {
  state = {
    numbers: [
      
    ],
    operators: [
      {add:"+"},
      {sub:"-"},
      {divide:"/"},
      {mult:"*"}
    ],
    currentEquation:"0"

  }

  clickHandler = (input) =>{
    let copyState = {...this.state};
    let newState=null;
    if (copyState.currentEquation == "0"){
      if(input === "*" || input === "/" || input === "+" || input === "-"){
        newState = copyState.currentEquation+input
      }
      else{
        newState = input;
      }
    }
    else {
      newState = copyState.currentEquation+input;
    }


    this.setState({
      currentEquation: newState
    })
  }

  resetDisplay = () => {
    const data = "0";
    this.setState({
      currentEquation: data
    })
  }

  calculateAll = () => {

  }



  render() {
    const removePadding = {
      padding: '0',
      margin: '0'
    }

    return (
      <div className="App">
        <header className="App-header">
            <div className="outerBox">
                <Row className="display">
                      <Col s={12} className="displayData">
                        {this.state.currentEquation}
                      </Col>
                </Row>
                <Row style={removePadding}>
                  <Col s={9} className="numberBoxList" style={removePadding}>
                    <Row className="numberRows">
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("9")}>
                        9
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("8")}>
                        8
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("7")}>
                        7
                      </Col>
                    </Row>
                    <Row className="numberRows">
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("6")}>
                        6
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("5")}>
                        5
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("4")}>
                        4
                      </Col>
                    </Row>
                    <Row className="numberRows">
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("3")}>
                        3
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("2")}>
                        2
                      </Col>
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("1")}>
                        1
                      </Col>
                    </Row>
                    <Row className="numberRows">
                      <Col s={4} className="numberBox" onClick={()=> this.clickHandler("0")}>
                        0
                      </Col>
                      <Col s={4} className="numberBox resetButton" onClick={this.resetDisplay}>
                        CLEAR
                      </Col>
                      <Col s={4} className="operatorBox" onClick={()=> this.clickHandler("+")}>
                          +
                      </Col>
                    </Row>
                  </Col>

                  <Col s={3} style={removePadding}>
                    <Row style={removePadding}>
                        <Col s={12} className="operatorBox" onClick={()=> this.clickHandler("*")}>
                          *
                        </Col>
                        <Col s={12} className="operatorBox" onClick={()=> this.clickHandler("/")}>
                          /
                        </Col>
                        <Col s={12} className="operatorBox" onClick={()=> this.clickHandler("-")}>
                          -
                        </Col>
                        <Col s={12} className="operatorBox">
                          =
                        </Col>
                      </Row>
                  
                  </Col>
                </Row>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
