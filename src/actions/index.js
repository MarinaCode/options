/**
 * Created by MArina Khanamiryan on 12/7/2017.
 */

export const SAVE_OPTIONS = "SAVE_OPTIONS";
export const DEFAULT_OPTIONS = "DEFAULT_OPTIONS";

export function createTheme(data) {
    return {
        type: SAVE_OPTIONS,
        data: data
    }
}

export function defaultOptions() {
    return {
        type: DEFAULT_OPTIONS
    }
}



