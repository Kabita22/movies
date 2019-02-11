import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersService } from 'src/app/services/users.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RouterModule } from '@angular/Router';
import { RoutingComponent } from './components/routing/routing.component';
import { AppRoutingModule } from 'src/app/app-routing-module';
import { MoviesService } from 'src/app/services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieListComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [UsersService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
