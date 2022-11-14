export async function getClasses(classType:string, jwt:string){
  let result = await fetch(`${import.meta.env.VITE_URLBACKTEST}/api/getClasses`,{
                method: 'POST',
                headers:{
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${jwt}`
                },
                body: JSON.stringify(
                    { classType }
                )
            }).then((res) => res.json())
  return result
}