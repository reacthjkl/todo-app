import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Todo } from '../shared/models/todo';
import { IdGeneratorService } from '../shared/services/id-generator.service';
import { TodoService } from '../shared/services/todo.service';
import { InsertComponent } from './insert/insert.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo-management',
  standalone: true,
  imports: [FontAwesomeModule, InsertComponent, TodoListComponent],
  templateUrl: './todo-management.component.html',
  styleUrl: './todo-management.component.scss',
})
export class TodoManagementComponent {
  public todos: Todo[] = []; //content list

  constructor(
    private todoSvc: TodoService, // interaction with db
    private idGeneratorSvc: IdGeneratorService
  ) {}

  ngOnInit() {
    this.fetchTodos();
    this.sort();
  }

  private fetchTodos() {
    this.todos = this.todoSvc.getTodos(); //get todos from api
  }

  private sort() {
    this.todos = this.todos.sort((a, b) => Number(a.done) - Number(b.done));
  }

  public add(todo: Todo) {
    //check if user typed something
    if (todo.task.length > 0) {
      todo.id = this.idGeneratorSvc.generateId(this.todos);

      this.todos.unshift(todo); //add newly created todo to local array

      this.todoSvc.add(todo); //send api request through service

      this.sort();
    }
  }

  public delete(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id); //remove todo from the local array

    if (todo.id) {
      this.todoSvc.delete(todo.id); //send api request through service
    }

    this.sort();
  }

  public update(todo: Todo) {
    this.todoSvc.update(todo); //send api request through service
  }

  public setDoneStatus(todo: Todo, newDoneStatus: boolean) {
    todo.done = newDoneStatus; //set new status

    this.update(todo);

    this.sort();
  }
}
