import { ITodo } from '@interfaces/todo-list.interface';

export namespace TodoListAction {
  export class SetTodoList {
    static readonly type = '[TodoList] Set Todo List';
    constructor(public todoList: ITodo[]) {}
  }
}
