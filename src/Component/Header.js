import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    state={
        collapse:false
    }        
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto text-center">
              <div className="container">
              <strong className="text-white">Album</strong>
                <button className="navbar-toggler" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true"
                aria-label="Toggle navbarNav" >
                    <span className="navbar-toggler-icon" onClick={()=>{this.setState({collapse :!this.state.collapse}
                        )}
                    }>
                    </span>
                </button>
                <div className={this.state.collapse? 'collapse navbar-collapse show text-center' : 'collapse navbar-collapse'}>
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/add" className="nav-link">Add Student</Link>
                        </li>
                    </ul>
                </div>   
                    <form className="form-inline my-2 my-lg-0" action="/admin">
                        <input className="form-control mr-sm-2" type="text" placeholder="username" name="username" />
                        <input className="form-control mr-sm-2" type="password" placeholder="password" name="password" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </form>

                
              </div>
            </nav>
        )
    }
}
