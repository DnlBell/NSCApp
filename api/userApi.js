// userApi.js

import urls from '../constants/urls';

const userApi = {
    fetchProfile(userToken) {
        const url = `${urls.mspnApiSecureRoot}/user/profile`;
        return fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + userToken
            },
            method: 'GET',
        })
        .then(res => res.json())        // convert string result to json
        .then(data => data)             // one could do some more manipulation of data here.
        .catch((err) => {
            //:TODO: This should get handled.
            console.log('this is an error for sure', err);
        });
    },

};

export default userApi;