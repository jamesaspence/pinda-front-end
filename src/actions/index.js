'use strict';
// @flow

import { ATTEMPT_LOGIN } from '../constants/action-types';

export type Action = {
    +type: string,
    +payload: any
};

export const attemptLogin: Function = (): Action => {
    const success: boolean = Math.random() >= 0.5;
    let error: ?string = null;
    if (!success) {
        error = 'Unable to do a thing';
    }

    //TODO make request to login
    //TODO handle result
    return {
        type: ATTEMPT_LOGIN,
        payload: {
            success,
            error
        }
    };
};