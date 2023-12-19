import { Component } from '@angular/core';
import { LoginUsers,User,} from '../../models/user/user.module';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrl: './creat-account.component.scss'
})
export class CreatAccountComponent {

  values: User = {pseudo:'',nom:'',prenom:'',pswd:'',email:'',categorie:''}

  constructor(private _service:UserService){

  }
    ngOnInit():void
    {

    }
    public sende()
    {
      console.log(this.values.email);
      console.log(this.values.pswd);
      console.log(this.values.pseudo);
      console.log(this.values.prenom);
      console.log(this.values.nom);
      console.log(this.values.categorie);
      
      
      console.log('button déclancher')
      this._service.register(this.values).subscribe(
        {
          next: () =>
          {
            console.log(this.values.email + " est valide"),
            console.log(this.values.pswd + "est valide")
            console.log(this.values.pseudo + "est valide")
            console.log(this.values.prenom + "est valide")
            console.log(this.values.nom + "est valide")
            console.log(this.values.categorie + "est valide")
            
          },
          error : (e) => console.log(e)
          
        }
      )
      
    }
 


  
}
