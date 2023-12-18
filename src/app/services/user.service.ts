import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectedUser ,} from '../models/user/user.module';
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

  public get() : Observable<User[]>
  {
    return this._client.get<User[]>('https://localhost:7134/api/Users');
  }

  public post(myvalue:string) : Observable<User>
  {
    return this._client.post<User>('https://localhost:7134/api/Users', { value : myvalue });
  }
 
}

