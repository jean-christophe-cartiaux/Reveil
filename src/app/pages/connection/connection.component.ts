import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { LoginUsers,User} from '../../models/user/user.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagContentType } from '@angular/compiler';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {

  values: LoginUsers = {pswd:'',email:''}

  constructor(private _service:UserService){

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
          next: () =>
          {
            console.log(this.values.email + " est valide"),
            console.log(this.values.pswd + "est valide")
            
          },
          error : (e) => console.log(e)
          
        }
      )
      
    }
 
}




