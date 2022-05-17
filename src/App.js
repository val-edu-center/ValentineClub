import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Header from './components/common/Header'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import PageNotFound from './components/common/PageNotFound'
import LoginPage from './components/login/LoginPage'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import AccountsPage from './components/accounts/AccountsPage'
import UnauthorizedPage from './components/common/UnauthorizedPage'
import LogoutPage from './components/logout/LogoutPage'
import Parse from 'parse/dist/parse.min.js'
import GameNightPage from './components/gameNights/GameNightPage'
import ManageGameNightPage from './components/gameNights/ManageGameNightPage'
import ManageAccountPage from './components/accounts/ManageAccountPage'

//TODO Add secure configs for this
const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID
const PARSE_HOST_URL = process.env.REACT_APP_PARSE_HOST_URL
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
const PARSE_MASTERKEY = process.env.REACT_APP_PARSE_MASTERKEY
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY)
Parse.serverURL = PARSE_HOST_URL
Parse.masterKey = PARSE_MASTERKEY

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/logout" component={LogoutPage}></Route>
                <Route path="/accounts" component={AccountsPage}></Route>
                <Route path="/account/:slug" component={ManageAccountPage}></Route>
                <Route path="/account/" component={ManageAccountPage}></Route>
                <Route path="/gamenights" component={GameNightPage}></Route>
                <Route path="/gamenight/" component={ManageGameNightPage}></Route>
                <Route path="/unauthorized" component={UnauthorizedPage}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    )
}

export default App