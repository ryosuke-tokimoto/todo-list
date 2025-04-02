import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TodoListState, TodoListStateModel } from './todo-list.state';
import { TodoListAction } from './todo-list.action';
import { ITodo } from '@interfaces/todo-list.interface';

describe('TodoListState', () => {
  let store: Store;

  const mockTodos: ITodo[] = [
    {
      id: 1,
      title: 'Test Title 1',
      status: 'NEW',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Test Title 2',
      status: 'PROGRESS',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodoListState])],
    });

    store = TestBed.inject(Store);
  });

  it('should select empty todo list by default', () => {
    const todoList = store.selectSnapshot(TodoListState.getTodoList);
    expect(todoList).toEqual([]);
  });

  it('should handle SetTodoList action', () => {
    store.dispatch(new TodoListAction.SetTodoList(mockTodos));

    const state = store.selectSnapshot<TodoListStateModel>((state) => state.todoList);
    expect(state.todoList).toEqual(mockTodos);

    const todoList = store.selectSnapshot(TodoListState.getTodoList);
    expect(todoList).toEqual(mockTodos);
  });
});
