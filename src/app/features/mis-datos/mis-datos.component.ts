import { Component, OnInit } from '@angular/core';
import { datosPersonalesService } from '../../services/datos-personales-service.service';
import { CommonModule } from '@angular/common';
import { BlobOptions } from 'buffer';
import { DatosPersonales } from '../../models/datos-personales';


@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.css'
})
export class MisDatosComponent implements OnInit{
  datosPersonales!: DatosPersonales;
  cargando:boolean=false;
  error:string="";
  constructor(private datosPersonaleService: datosPersonalesService){}

  ngOnInit(){  // metodo que se ejecuta al cargar el componente
      // llamo al metodo obtenerEstudiantes del servicio para obtener los estudiantes
    this.datosPersonaleService.obtenerMisDatos().subscribe({
      next: (data) => {
        console.log("entro aca");
        
        console.log(JSON.stringify(data));
        this.datosPersonales = data;
        console.log(JSON.stringify(this.datosPersonales));
        
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar tus datos.';
        this.cargando = false;
      }
    });
  }

}
