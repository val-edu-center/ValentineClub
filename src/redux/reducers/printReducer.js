import { CREATE_PRINT_SUCCES, DELETE_PRINT_OPTIMISTIC, LOAD_ALL_PRINTS_SUCCESS, UPDATE_PRINT_SUCCES } from "../actions/actionTypes"
import initialState from "./initialState"

export default function printReducer(state = initialState.prints, action) {
    switch (action.type) {
        case CREATE_PRINT_SUCCES:
            return [action.print, ...state]
        case UPDATE_PRINT_SUCCES:
            return state.map( print => print.id === action.print.id ? action.print : print )
        case LOAD_ALL_PRINTS_SUCCESS:
            return action.prints
        case DELETE_PRINT_OPTIMISTIC:
            return state.filter( print => print.id !== action.print.id )
        default:
            return state
    }
}