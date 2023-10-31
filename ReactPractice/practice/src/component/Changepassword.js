import React, { Component } from 'react';


class Changepassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Password:false,
            
        };
    }
   
    changeState = (event) => {

        this.setState(
            {
           Password:event.target.checked,

            }
        )
    }

    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark'>
                    <a href='#' class='navbar-brand'>Change Password</a>
                </nav>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header bg-warning text-white'>
                                    <h3>change password</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='input-group mb-3'>
                                            <input type={this.state.Password ? "text" : "password"} className='form-control' name='password'  style={{ height: '40px', marginTop: '43px', borderRadius: '10px' }} aria-label=' Text input with checkbox ' />
                                            <div className='input-group-append'>
                                                <div style={{marginTop: '43px', marginLeft: '20px',}} className='input-group-text'>
                                                    <input type='checkbox' onChange={this.changeState} value={this.state.Password} aria-label='checkbox for following text input ' />
                                                    <span className='mx-2'>Show Password</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Changepassword;