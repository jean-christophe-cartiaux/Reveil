export interface User{
  pseudo : string
  pswd : string
  prenom:string
  nom : string 
  email : string 
  categorie:string
}
export interface LoginUsers {
  
  email : string 
  pswd : string 

}

export interface ConnectedUsers{  
  pseudo : string
  prenom:string
  nom : string 
  email : string 
  categorie:string
}