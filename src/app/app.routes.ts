import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Experiences } from './components/experiences/experiences';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contacts } from './components/contacts/contacts';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'experience',
    component: Experiences,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'skills',
    component: Skills,
  },
  {
    path:'contact',
    component:Contacts
  },
];
