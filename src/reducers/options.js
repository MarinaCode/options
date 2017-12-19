/**
 * Created by Marina Khanamiryan on 12/7/2017.
 */

import { SAVE_OPTIONS } from "../actions/index";
import { DEFAULT_OPTIONS } from "../actions/index";

const initialState = {
    prev,
    next,
    data: {
        width: 50,
        height: 100,
        bgcolor: '#3104B4',
        bdcolor: '#FFA07A',
        radius: 10
    }
}
let next = {};
let prev = {};

export default function(state=initialState, action) {
    switch (action.type) {
        case SAVE_OPTIONS:
            var data = action.data;
            return   data;

            break;
        case DEFAULT_OPTIONS:
            return initialState;
            break;
    }

    return state;
}