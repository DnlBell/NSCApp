// searchApi.js

import urls from '../constants/urls';

const searchApi = {
    fetchProducts(filter) {

        /* istanbul ignore url */
        const url = `${urls.mspnApiRoot}/course/filter`;

        /* istanbul ignore next */ 
        const searchFilter = {filter: filter};
        return fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(searchFilter),
        })
        .then(res => res.json())        // convert string result to json
        .then(data => data)             // one could do some more manipulation of data here.
        .catch((err) => {
            //:TODO: This should get handled.
            console.log('this is an error for sure', err);
        });
    },

};

export default searchApi;
