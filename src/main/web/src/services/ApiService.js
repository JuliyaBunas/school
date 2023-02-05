import axios from 'axios';

const instance = axios.create();

export const initApiService = (baseURL = '/') => {
    instance.defaults.baseURL = baseURL;
};

export const get = (url, config = {}) => instance.get(url, config);

export const put = (url, data, config = {}) =>
    instance.put(url, data, {
        ...config
    });

export const post = (url, data, config = {}) =>
    instance.post(url, data, {
        ...config,
        headers: {
            'Content-Type': 'application/json'
        }
    });

export const del = (url, data, config = {}) =>
    instance.delete(url, {
        ...config,
        data: data
    });

export const getErrorStatus = error =>
    // если ошибка не имеет response или response.status
    // возвращаем код 504 (Gateway Timeout)
    error?.response?.status || 504;

export const getErrorData = error => error?.response?.data;

export const isBadRequest = status => {
    return status === 400;
};

export const isNetworkError = error => {
    const status = getErrorStatus(error);
    return status > 500;
};

const Api = {
    get,
    put,
    post,
    del
};

export default Api;
