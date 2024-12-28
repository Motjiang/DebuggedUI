import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../models/addCategoryRequest';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.baseUrl}categories`);
  } 

  
  addCategory(model: AddCategoryRequest): Observable<void>{

    return this.http.post<void>(`${environment.baseUrl}categories`,model);
  }
}
