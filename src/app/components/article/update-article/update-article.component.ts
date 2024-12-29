import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { CategoryService } from '../../category/services/category.service';
import { ImageSelectorService } from '../../articleImage/services/image-selector.service';
import { Category } from '../../category/models/category';
import { UpdateArticleRequest } from '../models/updateArticleRequest';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit, OnDestroy {

  id: string | null = null;
  model?: Article;
  categories$? : Observable<Category[]>;
  selectedCategories?: number[];
  isImageSelectorVisible : boolean = false;


  routeSubscription?: Subscription;
  updateArticleSubscription?: Subscription;
  getArticleSubscription?: Subscription;
  deleteArticleSubscription?: Subscription;
  imageSelectSubscricption?: Subscription;


  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router:Router,
    private imageSelectorService: ImageSelectorService) {

  }


  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();


    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        // Get artivle From API
        if (this.id) {
          this.getArticleSubscription = this.articleService.getArticleById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCategories = response.categories.map(x => x.id);
            }
          });
          ;
        }

        this.imageSelectSubscricption = this.imageSelectorService.onSelectImage()
        .subscribe({
          next: (response) => {
            if (this.model) {
              this.model.featuredImageUrl = response.url;
              this.isImageSelectorVisible = false;
            }
          }
        })
      }
    });
  }

  onFormSubmit(): void {
    // Convert this model to Request Object
    if (this.model && this.id) {
      var updateArticle: UpdateArticleRequest = {
        author: this.model.author,
        content: this.model.content,
        shortDescription: this.model.shortDescription,
        featuredImageUrl: this.model.featuredImageUrl,
        isVisible: this.model.isVisible,
        publishedDate: this.model.publishedDate,
        title: this.model.title,
        urlHandle: this.model.urlHandle,
        categories: this.selectedCategories ?? []
      };

      this.updateArticleSubscription = this.articleService.updateArticle(this.id, updateArticle)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/article');
        }
      });
    }

  }

  onDelete(): void {
    if (this.id) {
      // call service and delete blogpost
      this.deleteArticleSubscription = this.articleService.deleteArticle(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/article');
        }
      });
    }
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
  }

  closeImageSelector() : void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateArticleSubscription?.unsubscribe();
    this.getArticleSubscription?.unsubscribe();
    this.deleteArticleSubscription?.unsubscribe();
    this.imageSelectSubscricption?.unsubscribe();
  }

}
