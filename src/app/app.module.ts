import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

// custom imports
import {RouterModule,Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"create",component:BlogCreateComponent},
      {path:"view",component:BlogViewComponent},
      {path:"edit",component:BlogEditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
