import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {

  @Input() placeholder: string = ''
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  onTextChange(){
    this.textChange.emit(this.text)
  }

}
