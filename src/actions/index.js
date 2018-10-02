// @flow

import { ATTEMPT_LOGIN } from '../constants/action-types';

export type Action = {
    +type: string,
    +payload: any
};

const setLogin = (success, error): Action => ({
        type: ATTEMPT_LOGIN,
        payload: {
            success,
            error
        }
    });

export const attemptLogin = () => {
    return (dispatch: Function, getState: Function) => {
        const success: boolean = !getState().login.success;

        return dispatch(setLogin(success, null));
    }
};