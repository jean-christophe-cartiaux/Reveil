import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginUsers } from '../../models/user/user.module';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {



  values: LoginUsers = {pswd:'',email:''}

  constructor(private _service:UserService,private route:Router){

  }
    ngOnInit():void
    {
      // this._service.get().subscribe(
      //   {
      //     next:(data) => this.values=data,
      //     error:(e) => console.log(e),
      //     complete :() => console.log('la valeur est complete')
          
          
      //   }
      // )
    }
    public send()
    {
      console.log(this.values.email);
      console.log(this.values.pswd);
      
      console.log('button déclancher')
      this._service.login(this.values).subscribe(
        {
          next: () => this.route.navigate(["/profil"]),
        
          error : (e) => console.log(e)
          
        }
      )
      
    }

}
