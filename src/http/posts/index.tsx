import * as Curso from '../../../services/Curso';
export async function createPost(username:string,level:string,profilePic:string, imgUrlPost:string | undefined, captionPost:string,jwt:string){
  let result = await fetch('http://localhost:9999/api/createPost',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { username, level, profilePic, imgUrlPost, captionPost, Comments:[], Likes:[] }
                )
            }).then((res) => res.json())
  return result
}

export async function updateImage(file:any){
        if(file && file.size > 0){
            let result = await Curso.insertPosts(file);
      
            if(result instanceof Error){
              alert(`${result.name}-${result.message}`);
            } else{
              let newCursoList = [];
              newCursoList.push(result);
                return newCursoList[0].url
            }
        }else{
            alert('deu ruim')
        }
}

export async function getPost(jwt:string){
  let result = await fetch('http://localhost:9999/api/getPost',{
                method: 'GET',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                }
            }).then((res) => res.json())
  return result
}

export async function addComment(profilePic:string, comment:string, username:string, level:string, id:string, jwt:string){
  let result = await fetch('http://localhost:9999/api/addComment',{
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
  let result = await fetch('http://localhost:9999/api/addLike',{
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
  let result = await fetch('http://localhost:9999/api/removeLike',{
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