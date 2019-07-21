import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import App from '../App'
import Home from '../views/Home/index'
import User from '../views/User/index'
import NotFound from '../views/NotFound/index'

class RouterMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Switch>
                    <Route path="/" component={App} >
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                        {/* <Route path="/*" component={NotFound}/> */}
                        <Redirect from="/" to="/home"/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap