import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Direction } from '../../types/Pagination' 

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() currentPage: number = 1
  @Input() totalPages: number = 0
  @Output() change = new EventEmitter<string>()

  constructor() { }

  get Direction(){
    return Direction;
  }

  onPaginationChange(direction: string): void{
    this.change.emit(direction)
  }

}
