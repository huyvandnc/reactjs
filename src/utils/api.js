const STORAGE_TOKEN_KEY = 'token';

export const clearToken = () => {
    localStorage.removeItem(STORAGE_TOKEN_KEY);
};

export const setToken = (token) => {
    localStorage.setItem(STORAGE_TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(STORAGE_TOKEN_KEY);
};

export const fetchUser = () => {
    return new Promise((resolve, reject) => {
        if (getToken()) {
            fetch(`/api/v1/user/me`)
                .then((res) => res.json())
                .then(resolve)
                .catch(reject);
        }
        else {
            reject();
        }
    });
};

export const registerUser = (user) => {
    //const axios = initInstance();
    //return axios.post('/auth/register', user);
};

export const loginUser = (user) => {
    //const axios = initInstance();
    //return axios.post('/auth/login', user);
};
