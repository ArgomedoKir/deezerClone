import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {

  @Input('textHolder') textHolder!: string;
  @Output('buscar') buscarEvent: EventEmitter<string> = new EventEmitter<string>();
  terminoABuscar: string = '';

  constructor() { }

  buscar(): void{
    if( this.terminoABuscar.trim().length === 0 ){
      return;
    }
    this.buscarEvent.emit( this.terminoABuscar.trim() );
  }

}
