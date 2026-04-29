import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contactus } from './pages/contactus/contactus';
import { Aboutus } from './pages/aboutus/aboutus';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"contactus",component:Contactus},
    {path:"aboutus",component:Aboutus},
    {path:"",redirectTo:"home",pathMatch:"full"}
];
