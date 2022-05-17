import { CREATE_USER_SUCCESS, UPDATE_USER_SUCCESS, LOAD_USERS_SUCCESS, DELETE_USER_OPTIMISTIC, CLEAR_USERS, SELECT_GROUP_SUCCESS } from "../actions/actionTypes"
import initialState from './initialState'

export default function userReducer(state = initialState.users, action) {
    switch(action.type) {
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                list: [action.user, ...state.users]
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                list: state.users.map (
                    user => user.id === action.user.id ? action.user : user 
                )
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                list: action.users
            }
        case DELETE_USER_OPTIMISTIC:
            return {
                ...state,
                list: state.filter (user => user.id !== action.user.id)
            }
        case CLEAR_USERS:
            return {
                ...state,
                list: initialState.users
            }
        case SELECT_GROUP_SUCCESS:
            return {
                ...state,
                selectedGroup: action.group
            }

        default:
            return state
    }

}