import urls from '../constants/urls';
const authApi = {
    handler(userInfo) {
        /* istanbul ignore url */ 
        const url = `${urls.mspnApiAuthRoot}/login`;
        // using the ref to grab the form value
        const formValues = userInfo;
        
        /* istanbul ignore next */ 
        if (userInfo != undefined) {
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                uid: userInfo.uid,
                pwd: userInfo.pwd
              })
            })
            .then((response) => response.json())
            .then((data)=> data)
            .catch((error) => {
                 console.log(error);
            })
          }
    }
}

export default authApi;