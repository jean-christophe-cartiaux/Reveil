import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { LoginUsers,User} from '../../models/user/user.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagContentType } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {

  isConnect:boolean =false
  mySubject:Subject<boolean> = new Subject<boolean>()
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
    IsConnect()
    {
      this.mySubject.next(this.isConnect)
    }
    connected()
    {
      this.isConnect =true
      this.IsConnect()
    }
    disconnect()
    {
      this.isConnect = false
      this.IsConnect()
    }
   
 
}




