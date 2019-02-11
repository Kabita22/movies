import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { LoginComponent } from './component/login/login.component';
import { MoviesDetailsComponent } from './component/movies-details/movies-details.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'moviesList', component: MoviesListComponent },
    { path: 'movieDetails/:movieName', component: MoviesDetailsComponent },    
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }