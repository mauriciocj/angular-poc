import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event): void{
    this.clicked.emit(event);
  }
}
