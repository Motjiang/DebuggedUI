import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-read-category',
  templateUrl: './read-category.component.html',
  styleUrls: ['./read-category.component.css']
})
export class ReadCategoryComponent implements OnInit {

  categories$? : Observable<Category[]>


  constructor(private categoryService: CategoryService){

  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }
}
