import { types } from "../types/types";

export const handleNavState = ( state ) => ({
    type: types.uiNavState,
    payload: state
})