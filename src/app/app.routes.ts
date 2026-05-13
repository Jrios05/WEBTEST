import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contactus } from './pages/contactus/contactus';
import { Team } from './pages/team/team';
import { Project } from './pages/project/project';
import { ProjectNew } from './admin/project/project-new/project-new';
import { ProjectList } from './admin/project/project-list/project-list';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "aboutus", component: Aboutus},
    {path: "contactus", component: Contactus},
    {path: "team", component: Team},
    {path: "project/:id", component: Project},
    {path: "admin/project/new", component: ProjectNew},
    {path: "admin/project/list", component: ProjectList},
    {path: "", redirectTo: "home", pathMatch: "full"}
];
