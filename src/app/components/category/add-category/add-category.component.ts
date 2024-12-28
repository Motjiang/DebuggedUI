import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/addCategoryRequest';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  
  model : AddCategoryRequest;
  private addCategorySubscription? : Subscription;

  constructor(private categoryService: CategoryService, private router: Router) {
    this.model ={
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit(){
    this.addCategorySubscription = this.categoryService.addCategory(this.model).subscribe({
      next:(response) => {
        
        this.router.navigateByUrl('/category');
      }
    });

  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
