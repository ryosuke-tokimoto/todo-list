import { Store } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@interfaces/todo-list.interface';
import { TodoListApiService } from './todo-list-api.service';
import { TodoListStoreModule } from './store/todo-list.store.module';
import { TodoListState } from './store/todo-list.state';
import { TodoListAction } from './store/todo-list.action';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: TodoListStoreModule,
})
export class TodoListFacade {
  constructor(
    private store: Store,
    private todoListApiService: TodoListApiService,
  ) {}

  todoList$: Observable<ITodo[]> = inject(Store).select(TodoListState.getTodoList);

  getTodoList(): void {
    this.todoListApiService
      .getTodoList()
      .pipe(first())
      .subscribe((response) => {
        this.store.dispatch(new TodoListAction.SetTodoList(response.todoList));
      });
  }
}
