import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    
    private apiUrl = 'url';
    
    constructor(private http: HttpClient) { }

      login(username: string, password: string) {
        const body = {
          username: username,
          password: password
        };
        return this.http.post<any>(`${this.apiUrl}/login`, body);
      }
}