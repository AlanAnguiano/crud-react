import React, { Component } from 'react';

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand" href="/">CRUD BrightCoders</a>
                </div>
            </nav>
        )
    }
}
export default Nav;