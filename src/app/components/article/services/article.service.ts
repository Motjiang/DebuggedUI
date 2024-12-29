import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';
import { UpdateArticleRequest } from '../models/updateArticleRequest';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  addArticle(data: Article) : Observable<Article> {
    return this.http.post<Article>(`${environment.baseUrl}articles`, data);
  }

  getAllArticles() : Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.baseUrl}articles`);
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${environment.baseUrl}articles/search/${id}`);
  }

  getArticleByUrlHandle(urlHandle: string): Observable<Article> {
    return this.http.get<Article>(`${environment.baseUrl}articles/view/${urlHandle}`);
  }
  
  updateArticle(id: string, updatedArticle: UpdateArticleRequest): Observable<Article> {
    return this.http.put<Article>(`${environment.baseUrl}articles/${id}`, updatedArticle);
  }

  deleteArticle(id: string): Observable<Article> {
    return this.http.delete<Article>(`${environment.baseUrl}articles/${id}`);
  }
}
