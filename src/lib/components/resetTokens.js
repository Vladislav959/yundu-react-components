function resetTokens(){
  return new Promise((resolve,reject)=>{
    fetch('https://api.yundu.co/resettokens',{
        method: 'POST',
        body: JSON.stringify({refreshToken:localStorage.getItem('refreshToken')}),
        headers: {
          'Content-Type': 'application/json'
        }}).then(response => response.json()).then(result =>{
            let status = result.status;
            if(status === 'ok'){
            localStorage.setItem('accessToken',result.data.accessToken);
            localStorage.setItem('refreshToken',result.data.refreshToken);
            resolve({status:'ok'})
            }
            else{
              resolve('need relogin')
            }
        })
  })
  }
  export default resetTokens;