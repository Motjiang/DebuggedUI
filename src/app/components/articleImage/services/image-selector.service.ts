import { Injectable } from '@angular/core';
import { ArticleImage } from '../models/articleImage';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageSelectorService {


  selectedImage: BehaviorSubject<ArticleImage> = new BehaviorSubject<ArticleImage>({
    id: 0,
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<ArticleImage[]> {
    return this.http.get<ArticleImage[]>(`${environment.baseUrl}images`);
  }

  uploadImage(file: File, fileName: string, title: string): Observable<ArticleImage> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    formData.append('title', title);

    return this.http.post<ArticleImage>(`${environment.baseUrl}images`, formData);
  }

  selectImage(image: ArticleImage): void {
    this.selectedImage.next(image);
  }

  onSelectImage(): Observable<ArticleImage> {
    return this.selectedImage.asObservable()
  }
}
