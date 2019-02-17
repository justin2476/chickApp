import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuAndContent :{   display: "grid",
      backgroundColor: "#5CDB95",
      overflowY: "scroll",
      height:"500px",
      gridTemplateColumns:"150px auto"
    },
    divCheckbox:{
      display:'none'
    },
    contactedFrom:0
    }
    this.handleClick = this.handleClick.bind(this)
  
}
 


handleClick(form) {
    this.setState({menuAndContent : {
      display: "grid",
      backgroundColor: "#5CDB95",
      overflowY: "scroll",
      height:"500px",
      gridTemplateColumns:"150px auto 300px"
    },
    divCheckbox:{
      display:'inline',
      backgroundColor:'#667F79'
    },
    contactedFrom:form
  })
    console.log(form)
}
  render() {
    return (
      <div>
      <div className="header">HEADER</div>
                    <div style={this.state.menuAndContent}>
                    <div className="menu">MENU
                    
                       <ul   type="none">
                          <li>
                             first
                            </li>
                          <li>
                              second
                            </li>
                          <li>
                              third
                            </li>
                       </ul>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div onClick={this.handleClick.bind(this, '1')}>1</div>
                            <div onClick={this.handleClick.bind(this, '2')}>2</div>
                            <div onClick={this.handleClick.bind(this, '3')}>3</div>
                            <div onClick={this.handleClick.bind(this, '4')}>4</div>
                            <div onClick={this.handleClick.bind(this, '5')}>5</div>
                            <div onClick={this.handleClick.bind(this, '6')}>6</div>
                            <div onClick={this.handleClick.bind(this, '7')}>7</div>
                            <div onClick={this.handleClick.bind(this, '8')}>8</div>
                            <div onClick={this.handleClick.bind(this, '9')}>9</div>
                            <div onClick={this.handleClick.bind(this, '10')}>10</div>
                            <div onClick={this.handleClick.bind(this, '11')}>11</div>
                            <div onClick={this.handleClick.bind(this, '12')}>12</div>
                        </div>
                    </div>
                    <div style={this.state.divCheckbox}>CONTACTED FROM {this.state.contactedFrom}</div>
                </div>
                    <div className="footer">FOOTER</div>
                    </div>
    );
  }
}

export default App;
