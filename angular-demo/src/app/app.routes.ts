import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';
import { Passsword } from './passsword/passsword';


export const routes : Routes = [
  {
    path: 'tareas',
    component: Tareas
  },
  {
    path: 'password',
    component: Passsword

  },
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  }
]
