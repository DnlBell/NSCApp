import urls from '../constants/urls';
const authApi = {
    handler(userInfo) {
        const url = `${urls.mspnApiAuthRoot}/login`;
        console.log(url)
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
            uid: userInfo.email,
            pwd: userInfo.password
          })
        }).then((response) =>{
          console.log(response.json()) 
          response.json()
          )}.then((data)=>{
          if (data.token != undefined) {
            this.setState({token: true});
            console.log(data)
          }
          return data;
        }).catch((error) => {
          console.error(error);
        })
      } else {
        return;
      }
    }
}

export default authApi;