interface contentType {
  id: string,
  description?: string,
  classes?: [string,string,string],
  LastClasses?: [string,string]
}

export async function updateProfile(content: contentType, jwt:string){
  let id = content.id
  let description = content.description
  let result = await fetch('https://cursoaula.herokuapp.com/api/createPost',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { id, description }
                )
            }).then((res) => res.json())
  return result
}

export async function updateClass(content:contentType, jwt:string){
  let id = content.id 
  let classes = content.classes
  let result = await fetch('https://cursoaula.herokuapp.com/api/getPost',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { id, classes }
                )
            }).then((res) => res.json())
  return result
}

export async function updateLastClass(content:contentType, jwt:string){
  let id = content.id 
  let lastClasses = content.LastClasses
  let result = await fetch('https://cursoaula.herokuapp.com/api/addComment',{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { id, lastClasses }
                )
            }).then((res) => res.json())
  return result
}

export async function getProfile(id:string, jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/addLike',{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { id }
                )
            }).then((res) => res.json())
  return result
}
