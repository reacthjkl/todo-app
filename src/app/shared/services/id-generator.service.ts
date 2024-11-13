import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class IdGeneratorService {
  constructor() {}

  public generateId(array: Todo[]): number {
    const maxId = array.reduce((max, todo) => Math.max(max, todo.id ?? 0), 0);
    return maxId + 1;
  }
}
