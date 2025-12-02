import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { proyectoService } from '../../services/proyecto-service.service';

@Component({
  selector: 'app-vista-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-proyectos.component.html',
  styleUrls: ['./vista-proyectos.component.css']
})
export class VistaProyectosComponent implements OnInit {
  vistaProyectos: any[] = [];
  cargando: boolean = false;
  error: string = "";

  constructor(private proyectoService: proyectoService) {}

  ngOnInit() {
    this.cargando = true;

    this.proyectoService.obtenerProyectos().subscribe({
      next: (data) => {
        console.log("Proyectos obtenidos correctamente");
        console.log(JSON.stringify(data));

        this.vistaProyectos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudieron cargar tus datos.';
        this.cargando = false;
      }
    });
  }
}
