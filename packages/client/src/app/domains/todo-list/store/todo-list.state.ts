import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { TodoListAction } from './todo-list.action';
import { ITodo } from '@interfaces/todo-list.interface';

export interface TodoListStateModel {
  todoList: ITodo[];
}

@State<TodoListStateModel>({
  name: 'todoList',
  defaults: {
    todoList: [],
  },
})
@Injectable()
export class TodoListState {
  @Selector()
  static getTodoList(state: TodoListStateModel): ITodo[] {
    return state.todoList;
  }

  @Action(TodoListAction.SetTodoList)
  async setTodoList(ctx: StateContext<TodoListStateModel>, action: TodoListAction.SetTodoList) {
    ctx.setState(
      patch({
        todoList: action.todoList,
      }),
    );
  }
}
