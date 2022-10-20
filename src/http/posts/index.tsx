export async function createPost(username:string,level:string,profilePic:string,captionPost:string,Comments:[],Likes:[],jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/createPost',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { username, level, profilePic, captionPost, Comments, Likes }
                )
            }).then((res) => res.json())
  return result
}

export async function getPost(jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/getPost',{
                method: 'GET',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                }
            }).then((res) => res.json())
  return result
}

export async function addComment(profilePic:string, comment:string, username:string, level:string, id:string, jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/addComment',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { profilePic, comment, username, level, id }
                )
            }).then((res) => res.json())
  return result
}

export async function addLike(idPost:string, idUser:string, jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/addLike',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { idPost, idUser }
                )
            }).then((res) => res.json())
  return result
}

export async function removeLike(idPost:string, idUser:string, jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/removeLike',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { idPost, idUser }
                )
            }).then((res) => res.json())
  return result
}