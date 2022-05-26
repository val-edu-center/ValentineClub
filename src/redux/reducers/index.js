import {combineReducers} from 'redux'
import session from './sessionReducer'
import users from './userReducer'
import bankAccounts from './bankAccountReducer'
import apiCallsInProgress from './apiStatusReducer'
import roles from './roleReducer'
import gameNight from './gameNightReducer'
import prints from "./printReducer"

const rootReducer = combineReducers({
    session, users, roles, bankAccounts, gameNight, prints, apiCallsInProgress
})

export default rootReducer;