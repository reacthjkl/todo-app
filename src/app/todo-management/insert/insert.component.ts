import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.scss',
})
export class InsertComponent {
  @Output() inserted = new EventEmitter<Todo>();

  faPlus = faPlus;

  public submit(task: string) {
    this.inserted.emit({ task: task, done: false });
  }
}
