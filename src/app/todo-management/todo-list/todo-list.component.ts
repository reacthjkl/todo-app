import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';
import { ListItemComponent } from './list-item/list-item.component';
import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() renameEvent = new EventEmitter<Todo>();

  faFaceGrinBeamSweat = faFaceGrinBeamSweat; //logo for "all done"-message
}
