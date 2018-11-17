import urls from '../constants/urls';
const authApi = {
    fetchLogin(userInfo) {
        const url = `${urls.mspnApiAuthRoot}/login`;
        // using the ref to grab the form value
        // const formValues = userInfo;
        //console.log(formValues);
        console.log('Auth API');
        if (userInfo != undefined) {
        return fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            uid: userInfo.uid,
            pwd: userInfo.pwd
          })
        }).then((response) => response.json()).then((data)=>{
          if (data.token != undefined) {
            this.setState({token: true});
          }
        }).catch((error) => {
          console.log(error);
        })
      } else {
        return;
      }
    }
}

export default authApi;