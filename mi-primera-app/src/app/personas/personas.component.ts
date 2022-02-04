import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent  {
  deshabilitar:boolean = false;
  mensaje:string ='No se ha agregado ninguna persona';
  titulo:string = '';

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
