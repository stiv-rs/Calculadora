import { Component} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: [
  ]
})
export class PersonaComponent {

  nombre: string ='Juan';
  apellido: string = 'Perez';
  private edad: number =28;

  getEdad(): number{
    return this.edad;
  }
}
