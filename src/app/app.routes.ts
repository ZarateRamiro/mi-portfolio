import { Routes } from '@angular/router';
import path from 'path';
import { MisDatosComponent } from './features/mis-datos/mis-datos.component';
import { VistaProyectosComponent } from './features/vista-proyectos/vista-proyectos.component';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
    {path:'', component:VistaProyectosComponent},
    {path:'datos',component:MisDatosComponent},
    {path:'proyectos',component:VistaProyectosComponent},
    {path:'inicio',component:InicioComponent}
    
];
