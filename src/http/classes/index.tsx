export async function getClasses(classType:string, jwt:string){
  let result = await fetch('https://cursoaula.herokuapp.com/api/getClasses',{
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