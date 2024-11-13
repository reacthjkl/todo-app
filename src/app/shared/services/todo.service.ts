import { Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public getTodos(): Todo[] {
    //send request to api
    return [
      { id: 1, task: 'Angular lernen', done: true },
      { id: 2, task: 'Präsentation vortragen', done: false },
      { id: 3, task: 'Eine Aufgabe abhacken', done: false },
    ];
  }

  public add(todo: Todo): void {
    //send request to api
  }

  public update(todo: Todo): void {
    //send request to api
  }

  public delete(id: number): void {
    //send request to api
  }
}
