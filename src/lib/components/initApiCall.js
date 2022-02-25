export default function apiCall(accessToken,url,params){
  let body = params ? JSON.stringify(params) : null;
  return new Promise((resolve,reject) => {
    fetch('https://api.yundu.co/'+url,{method:'POST',headers:{'Content-Type':'application/json;charset=utf-8','x-access-token':accessToken},body}).then(response => response.json()).then(res =>{
    if(res.status === 'ok'){
       return resolve(res);
      }
      else{
          if(res.message === 'token expired' || res.message === 'auth failed' || res.message === 'invalid token'){
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
                        reject('need relogin')
                      }
                  })
            })
}
else{
 return reject(res)
}
                }
            })
  })
  
}