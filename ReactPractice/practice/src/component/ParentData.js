import React,{Component} from "react";
import ChildData from "./ChildData";
class ParentData extends Component {
  constructor(props){

  
  super(props)
  this.state={
    data : "Hello World",
    Cdata: ''

  }
}
update = (value) => {
  this.setState({Cdata: value})
}
  
  render() {
          
          return (
            
              
                <>
                <ChildData a={this.state.data} c={this.update}/>
            
                 <p>  parent data{this.state.data}</p>
                 <p>child data  {this.state.Cdata}</p>
                   </>
              
          );
      }
  }
  export default ParentData;

