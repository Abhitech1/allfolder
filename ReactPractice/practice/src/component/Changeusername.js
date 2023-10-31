import React, { Component } from 'react';
class Changeusername extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
        }
        
    }
    changeState = (event) => {

        this.setState(
            {
                msg: event.target.value,

            }
        )
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <nav style={{padding: '30px'}} class="Navbar navbardark bg-dark">
                    <a href="" style={{color: 'white',fontSize: '50px'}} className='navbar-brand'> Keyup Event </a>
                </nav> 
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card mt-5'>
                                <div className='card-header bg-secondary text-white'>
                                    <h3>keyup Event</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <input onChange={this.changeState} value={this.state.msg} type='text' className='form-control' />
                                        </div>
                                        <h3 className='card-title'>{this.state.msg}</h3>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}


export default Changeusername;