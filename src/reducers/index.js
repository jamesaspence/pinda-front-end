import { ATTEMPT_LOGIN } from '../constants/action-types';

export type State = {
    +login: {
        +success: boolean,
        +error?: any
    }
}

const initialState: State = {
    login: {
        success: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ATTEMPT_LOGIN:
            return { ...state, login: action.payload };
        default:
            return state;
    }
};