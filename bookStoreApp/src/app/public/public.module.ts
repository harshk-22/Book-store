import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AllBooksComponent } from './component/all-books/all-books.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AllBooksComponent,
    BookdetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
