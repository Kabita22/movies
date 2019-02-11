import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UsersService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing-module';
import { MoviesService } from './services/movies.service';
import { FirstAlphabetToUpperPipe } from './pipes/first-alphabet-to-upper.pipe';
import { RecommendedPipe } from './pipes/recommended.pipe';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    FirstAlphabetToUpperPipe,
    RecommendedPipe,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule    
  ],
  providers: [UsersService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
