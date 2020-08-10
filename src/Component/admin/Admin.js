import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddGroup from './AddGroup'
import EditDeleteGroup from './EditDeleteGroup'
import PageNotFound from '../../PageNotFound'
export default function Admin() {
    return (
        <div>
       <BrowserRouter>
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                            <Switch>
                                <Route exact={true} path="/admin" component={AddGroup}></Route>
                                <Route   path="/admin/addgroup" component={AddGroup}></Route>
                                <Route  path="/admin/editdeletegroup" component={EditDeleteGroup}></Route>
                                <Route component={PageNotFound}></Route>
                            </Switch>  
                    </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
            </div> 
            <Footer/>
        </BrowserRouter>
        </div>
    )
}
