import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

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
  @Output() deleteEvent = new EventEmitter();
  @Output() renameEvent = new EventEmitter();

  faCheck = faCheck;
  faTrash = faTrash;

  public rename(newName: string, event: Event): void {
    this.renameEvent.emit(newName);

    const inputElement = event.target as HTMLInputElement; //get html input element
    inputElement.blur(); //remove focus from html input element
  }
}
