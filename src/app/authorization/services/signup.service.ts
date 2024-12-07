import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from 'src/app/models/changePassword';
import { LoginResponseModel } from 'src/app/models/login-response';
import { LoginRequestModel } from 'src/app/models/loginRequestModel';
import { SignupRequestModel } from 'src/app/models/signupRequestModel';
import { Status } from 'src/app/models/status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = environment.baseUrl + 'Authorization';

  constructor(private http: HttpClient) {
    
  }

  login(model: LoginRequestModel) {
    return this.http.post<LoginResponseModel>(this.baseUrl + '/login', model);
  }

  signup(model: SignupRequestModel) {
    return this.http.post<Status>(this.baseUrl + '/registration', model);
  }

  changePassword(model:ChangePassword) {
    return this.http.post<Status>(this.baseUrl + '/changePassword',model)
  }
}
