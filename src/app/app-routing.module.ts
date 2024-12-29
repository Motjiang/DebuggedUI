import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authorization/login/login.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { ReadCategoryComponent } from './components/category/read-category/read-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ReadArticleComponent } from './components/article/read-article/read-article.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'    
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'article',
    component: ReadArticleComponent
  },
  {
    path:'category',
    component: ReadCategoryComponent
  },
  {
    path:'add/category',
    component: AddCategoryComponent
  },
  {
    path:'update/category/:id',
    component: UpdateCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
