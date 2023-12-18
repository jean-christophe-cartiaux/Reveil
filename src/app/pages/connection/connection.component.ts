import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ConnectedUser ,User} from '../../models/user/user.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagContentType } from '@angular/compiler';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {

  values!: ConnectedUser[]

  constructor(private _service:UserService){

  }
    ngOnInite():void
    {
      this._service.get().subscribe(
        {
          next:(data) => this.values=data,
          error:(e) => console.log(e),
          complete :() => console.log('la valeur est complete')
          
          
        }
      )
    }
    public send() : void
    {
      console.log('button déclancher')
      this._service.post('http://localhost:7134/api/Users').subscribe(
        {
          next: (content) =>
          {
            console.log(content.email + " est valide"),
            console.log(content.pswd + "est valide"),
            this.values.push(content)
            
          },
          error : (e) => console.log(e)
          
        }
      )
      
    }
 
}




