import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article/models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article/services/article.service';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {

  url: string | null = null;
  article$? : Observable<Article>;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService) {

  }
  ngOnInit(): void {
    this.route.paramMap
    .subscribe({
      next: (params) => {
        this.url = params.get('urlHandle');
      }
    });

    // Fetch article details by url
    if (this.url) {
      this.article$ = this.articleService.getArticleByUrlHandle(this.url);
    }
  }
}

