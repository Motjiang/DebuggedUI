import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleImage } from '../models/articleImage';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ImageSelectorService } from '../services/image-selector.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {

  private file?: File;
  fileName: string = '';
  title: string = '';
  images$?: Observable<ArticleImage[]>;

  @ViewChild('form', { static: false}) imageUploadForm?: NgForm;

  constructor(private imageSelectorService: ImageSelectorService) {

  }
  ngOnInit(): void {
    this.getImages();
  }

  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(): void {
    if (this.file && this.fileName !== '' && this.title !== '') {
      // Image service to upload the image
      this.imageSelectorService.uploadImage(this.file, this.fileName, this.title)
      .subscribe({
        next: (response) => {
          this.imageUploadForm?.resetForm();
          this.getImages();
        }
      });
    }
  }

  selectImage(image: ArticleImage): void {
    this.imageSelectorService.selectImage(image);
  }

  private getImages() {
    this.images$ = this.imageSelectorService.getAllImages();
  }
}
