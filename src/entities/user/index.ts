export interface User {
  profile: {
      email:string
      password:string
      username:string
      description:string 
      profilePic:string
      level:string
      classes:[string,string,string]
      LastClasses:[number,number]
      accessToken:string 
      id:string
  },
  status:string
}