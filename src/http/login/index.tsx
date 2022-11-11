
interface loginSuccessful {
  accessToken:string
  status:string
  _id:string
  error:string
}


export async function signUp(username:string, email:string, password:string, level:string, passwordConfirmation:string){

  let result:loginSuccessful = await fetch('http://localhost:9999/api/signup',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(
                    { username, email, password, level, passwordConfirmation }
                )
            }).then((res) => res.json())
   
  return result
}

export async function loginEmail(email:string, password:string) {

  let result:loginSuccessful = await fetch('http://localhost:9999/api/loginEmail',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(
                    { email, password }
                )
            }).then((res) => res.json())

  return result
}

export async function loginUsername(username:string, password:string){
  let result:loginSuccessful = await fetch('http://localhost:9999/api/loginUsername',{
    method: 'POST',
    headers:{
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(
        { username, password }
    )
    }).then((res) => res.json())

  return result
}