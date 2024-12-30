import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../../article/models/article';
import { ArticleService } from '../../article/services/article.service';

@Component({
  selector: 'app-sub-featured-article',
  templateUrl: './sub-featured-article.component.html',
  styleUrls: ['./sub-featured-article.component.css']
})
export class SubFeaturedArticleComponent implements OnInit {

  articles$?: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticles().pipe(
      map(articles => articles.slice(0, 2)) // Take only the first two articles
    );
  }
}
