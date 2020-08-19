import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

apiURL: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

public createUser(user: User){
  return this.httpClient.post(`${this.apiURL}/createUser/`, user);

 }

}
