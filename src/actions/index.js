/**
 * Created by MArina Khanamiryan on 12/7/2017.
 */

export const SAVE_OPTIONS = "SAVE_OPTIONS";

export function createTheme(data) {
    return {
        type: SAVE_OPTIONS,
        data: data
    }
}


