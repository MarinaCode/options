/**
 * Created by Marina Khanamiryan on 12/7/2017.
 */

import { SAVE_OPTIONS } from "../actions/index";


export default function(state=null, action) {
    switch (action.type) {
        case SAVE_OPTIONS:
            var data = action.data;
            return data;
    }

    return state;
}