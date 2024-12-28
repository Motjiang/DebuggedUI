import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../models/addCategoryRequest';
import { UpdateCategoryRequest } from '../models/updateCategoryRequest';

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

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category> {
    return this.http.put<Category>(`${environment.baseUrl}categories/${id}`, updateCategoryRequest);
  }

  getCategoryById(id:string):Observable<Category>{
    return this.http.get<Category>(`${environment.baseUrl}categories/${id}`);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.baseUrl}categories/${id}`)
  }
}
