// @flow

import ApiResponse from '../api/api-response';
import apiRepository from '../api/api-repository';
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
        console.log('attempting login!');
        return apiRepository.login("test@pinda.test", "secret")
            .then((response: ApiResponse) => {
                console.log(response);
                dispatch(setLogin(true, null))
            })
            .catch((response: ApiResponse) => {
                console.error(response);
                dispatch(setLogin(false, response))
            });

        // return dispatch(setLogin(success, null));
    }
};