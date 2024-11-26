import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'HOme Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'DEtails'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'PAge not found'
    }
];

export default routeConfig;