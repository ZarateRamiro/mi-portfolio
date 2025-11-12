import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosPersonales } from '../models/datos-personales';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class datosPersonalesService {

  constructor(private http:HttpClient) { }

obtenerMisDatos(): Observable<DatosPersonales> {
    return this.http.get<DatosPersonales>(environment.datosPersonalesUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }

}