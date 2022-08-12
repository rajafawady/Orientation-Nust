import React from "react";
 
export default (state, action) => {
    switch(action.type) {
        case 'SET_CLICK':
            return {
                click :!state.click,
            }

        default:
            return state;
    }
}