export async function getClasses(classType:string, jwt:string){
  let result = await fetch('http://localhost:9999/api/getClasses',{
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