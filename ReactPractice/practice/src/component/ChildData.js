import React, { Component } from 'react'


export default class ChildData extends Component {
  constructor(props){
  super(props);
  this.state = {
    Cdata: 'Hello Everyone How are you all'
  }
  }
  send = () =>{
    this.props.c(this.state.Cdata)
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

