import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Header extends Component {
    state={
        collapse:false,
        group:[]
    }        

    componentDidMount(){
        axios.get("http://localhost:3001/admin/group")
        .then(result=>{
            this.setState({group:result.data})
        }).catch(err=>console.log(err))
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
                        
                        {this.state.group.map(result=>(
                            <li className="navbar-item">
                             <Link to={"/group/"+result._id} className="nav-link">{result.group_name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>   
                    <form className="form-inline my-2 my-lg-0" action="/admin">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </form>
              </div>
            </nav>
        )
    }
}
