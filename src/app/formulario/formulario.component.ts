import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  snack_message = " se aprobó la solicitud";
  button_snackBar = "Cerrar"
  
  items = [
    {
      titulo: 'Homologación - Materia del tronco común',
      subtitulo: 'Sofía García Ruiz',
      contenido: 'Certifico que he cursado la asignatura de Álgebra linea en el semestre 2021-2, en la Universidad EAFIT. El promedio final obtenido en la asignatura fue de 4.2.'
    },
    {
      titulo: 'Homologación - Materia del tronco común',
      subtitulo: 'Javier Moreno González',
      contenido: 'Certifico que he cursado la asignatura de Calculo integral en el semestre 2013-1, en la Universidad Nacional. El promedio final obtenido en la asignatura fue de 3.8'
    },
    {
      titulo: 'Homologación - Materia del fuera del tronco común',
      subtitulo: 'Javier Moreno González',
      contenido: 'Certifico que he cursado la asignatura de Bases de Datos en el semestre 2015-2, en la Universidad del valle. El promedio final obtenido en la asignatura fue de 4.7.'
    }
  ];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {};

  ngOnInit() {
    console.log('I am here')
    this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu').subscribe((datos) => {
      console.log(datos);
    });
  }

  buttonDecision(decision: string) {
      this._snackBar.open(decision+this.snack_message, this.button_snackBar);
      
  }  
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }  
}