import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {

  @Input() placeholder = '';

  @Input() text = '';

  @Output() textChange = new EventEmitter<string>();

  onTextChange(): void{
    this.textChange.emit(this.text);
  }

}
