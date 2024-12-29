import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../category/models/category';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { ImageSelectorService } from '../../articleImage/services/image-selector.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit, OnDestroy {

  model: Article;
  isImageSelectorVisible : boolean = false;
  categories$?: Observable<Category[]>;

  imageSelectorSubscription?: Subscription;

  constructor(private articleService: ArticleService,
    private router: Router,
    private categoryService: CategoryService,
    private imageSelectorService: ImageSelectorService) {
    this.model = {
      id:0,
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
      categories: []
    }
  }


  ngOnInit(): void {
     this.categories$ = this.categoryService.getAllCategories();

     this.imageSelectorSubscription = this.imageSelectorService.onSelectImage()
     .subscribe({
      next: (selectedImage) => {
        this.model.featuredImageUrl = selectedImage.url;
        this.closeImageSelector();
      }
     })

  }

  onFormSubmit(): void {
    console.log(this.model);
    this.articleService.addArticle(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/article'); // Navigate on success
      },
      error: (err) => {
        console.error('Error adding article:', err); // Log the error
        // You can display an error message to the user
        this.router.navigateByUrl('/error404'); // Navigate on success
      }
    });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }

  closeImageSelector() : void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.imageSelectorSubscription?.unsubscribe();
  }
}
