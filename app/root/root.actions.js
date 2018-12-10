export const getCelebrities = (payload) => ({
    type: "GET_CELEBRITIES",
    payload,
});

export const setCelebrities = (payload) => ({
    type: "SET_CELEBRITIES",
    payload,
});

export const setSpinner = (payload) => ({
    type: "SET_SPINNER",
    payload,
});