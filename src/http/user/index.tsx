import * as Curso from '../../../services/Curso';

interface contentType {
  id: string,
  description?: string,
  classes?: [string,string,string],
  LastClasses?: [string,string]
}

async function updateImage(file:any){
  
  if(file && file.size > 0){
      let result = await Curso.insertProfile(file);
      if(result instanceof Error){
        alert(`${result.name}-${result.message}`);
      } else{
        let newCursoList = [];
          newCursoList.push(result);
          console.log(newCursoList);
         return newCursoList[0].url;
      }
  }else{
      return alert('deu ruim')
  }
}

export async function updateProfile(file:any|null, id:string,jwt:string, description:string, profilePic:string){
  if(file[0] && file[0].size > 0){
          const profilePic = await updateImage(file[0]);
          const result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/updateProfile`,{
          method: 'PUT',
          headers:{
              'Content-type' : 'application/json',
              'Authorization' : `Bearer ${jwt}`
          },
          body: JSON.stringify(
              {content:{ id,description, profilePic }}
          )
      }).then((res) => res.json())
  

  if(result.status === 'ok'){
      console.log('deu certo')
  }else{
      alert(result.error)
  }
}else{

const result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/updateProfile`,{
         method: 'PUT',
         headers:{
             'Content-type' : 'application/json',
             'Authorization' : `Bearer ${jwt}`
         },
         body: JSON.stringify(
             {content:{ id,description,profilePic }}
         )
     }).then((res) => res.json())
 

 if(result === 'Update Com Sucesso!'){
  console.log('deu certo')
 }else{
     alert(result.error)
 }

} }

export async function updateLevel(id:string, level:string, jwt:string){
    const result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/updateProfile`,{
          method: 'PUT',
          headers:{
              'Content-type' : 'application/json',
              'Authorization' : `Bearer ${jwt}`
          },
          body: JSON.stringify(
              {content:{ id, level}}
          )
      }).then((res) => res.json())
    return result
}

export async function updateClass(content:contentType, jwt:string){
  let id = content.id 
  let classes = content.classes
  let result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/updateClass`,{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { content: {id, classes} }
                )
            }).then((res) => res.json())
  return result
}

export async function updateLastClass(content:contentType, jwt:string){
  let id = content.id 
  let LastClasses = content.LastClasses
    console.log(content.LastClasses)
  let result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/updateLastClass`,{
                method: 'PUT',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { content:{id, LastClasses} }
                )
            }).then((res) => res.json())
  return result
}

export async function getProfile(id:string, jwt:string){
  let result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/getProfile`,{
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
