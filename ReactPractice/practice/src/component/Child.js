import React, { Component } from 'react'


export default class Child extends Component {
  constructor(props){
  super(props);
  this.state = {
    pdata:''
  
  }
  }
  recieve=() =>{
    this.props.a(this.state.pdata)
  }
  render() {
    return (
      <div>
        {this.props.a}
        <button onClick={this.send}>Click</button>
      </div>
    )
  }
}

