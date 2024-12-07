import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RefreshTokenRequest } from 'src/app/models/refreshTokenRequestModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { 

  }

  private baseUrl:string = environment.baseUrl + 'Token';


  generateRefreshToken(data: RefreshTokenRequest){
    const url = this.baseUrl + '/refresh';
    return this.http.post<RefreshTokenRequest>(url,data);
  }


  revokeRefreshToken(){
    const url = this.baseUrl + '/revoke';
    return this.http.post(url,null);
  }
}
