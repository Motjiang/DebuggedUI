import { Component, OnInit } from '@angular/core';
import { Article } from '../article/models/article';
import { Observable } from 'rxjs';
import { ArticleService } from '../article/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  article$?: Observable<Article[]>;
  constructor(private articleService: ArticleService) {

  }
  ngOnInit(): void {
    this.article$ = this.articleService.getAllArticles();
  }
}
