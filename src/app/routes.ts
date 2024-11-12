import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

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
    }
];

export default routeConfig;