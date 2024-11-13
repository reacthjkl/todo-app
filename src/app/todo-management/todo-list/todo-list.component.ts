import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../shared/models/todo';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ListItemComponent, FontAwesomeModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[]; //list content

  @Output() markDoneEvent = new EventEmitter<Todo>();
  @Output() markNotDoneEvent = new EventEmitter<Todo>();
  @Output() deleteEvent = new EventEmitter<Todo>();
  @Output() renameEvent = new EventEmitter<Todo>();

  faFaceGrinBeamSweat = faFaceGrinBeamSweat; //logo for "all done"-message
}
