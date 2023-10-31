import React,{Component} from "react";
import Child from "./Child";
class Parent extends Component {
  constructor(props){

  
  super(props)
  this.state={
    data : "Hello World",

  }
}
send=()=>({
  
})
  
  render() {
          
          return (
            
              <div>
                <>
                <Child a={this.state.data}/>
                <button >data</button>

            </>
                 
              </div>
          );
      }
  }
  export default Parent;

