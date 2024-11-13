import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faRotateRight,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../../shared/models/todo';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input({ required: true }) todo!: Todo; //data to display

  @Output() markDoneEvent = new EventEmitter();
  @Output() markNotDoneEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() renameEvent = new EventEmitter();

  faCheck = faCheck;
  faTrash = faTrash;
  faRotateRight = faRotateRight;

  public rename(newName: string, event: Event): void {
    this.renameEvent.emit(newName);

    const inputElement = event.target as HTMLInputElement; //get html input element
    inputElement.blur(); //remove focus from html input element
  }
}
