import urls from '../constants/urls';
const authApi = {
    handler(userInfo) {
        const url = `${urls.mspnApiAuthRoot}/login`;
        // using the ref to grab the form value
        const formValues = userInfo;
        //console.log(formValues);
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
          } else {
            return;
        }
    }
}

export default authApi;