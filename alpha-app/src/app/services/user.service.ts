import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl =  "http://localhost:8082"

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin',"http://localhost:8082/");
    return this.httpClient.get<User[]>(`${this.baseUrl}/all`, {headers: headers});
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${"http://localhost:8082/newUser"}`, user);
  }

  getUserById(id: number): Observable<Object> {
    return this.httpClient.get<User>(`${"http://localhost:8082/user"}/${id}`);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${"http://localhost:8082/user"}/${id}`);
  }
}
