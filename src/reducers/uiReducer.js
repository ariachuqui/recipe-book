import { types } from "../types/types";

const initialState = {
    navState: 'collections'
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiNavState:
            return {
                ...state,
                navState: action.payload
            }
        default:
            return state;
    }
}