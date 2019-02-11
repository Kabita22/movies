import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';



const appRoutes: Routes = [
    { path: 'moviesList', component: MovieListComponent },
    { path: '',  redirectTo: '/moviesList', pathMatch: 'full'}
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