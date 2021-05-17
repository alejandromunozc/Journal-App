import { types } from "../types/types"

export const setError = (error) => ({
    type: types.uiSetError,
    payload: error
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLogin,
    payload: true
});

export const finishLoading = () => ({
    type: types.uiFinishtLogin,
    payload: false
})