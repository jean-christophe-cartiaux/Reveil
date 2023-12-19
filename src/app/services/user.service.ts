import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectedUsers, LoginUsers ,} from '../models/user/user.module';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { User } from '../models/user/user.module';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _client:HttpClient) 
  { 

  }

  public register(values:User) : Observable<ConnectedUsers>
  {
    console.log(values);
    
    return this._client.post<ConnectedUsers>('https://localhost:7134/api/Users/register',values); 
  }

  public login(myvalue:LoginUsers) : Observable<ConnectedUsers>
  {
    console.log(myvalue);
    
    return this._client.post<ConnectedUsers>('https://localhost:7134/api/Users/login', myvalue); 
  }

  
 
}

