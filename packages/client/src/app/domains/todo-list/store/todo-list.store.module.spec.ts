import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TodoListStoreModule } from './todo-list.store.module';
import type { TodoListStateModel } from './todo-list.state';

describe('TodoListStoreModule', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), TodoListStoreModule],
    });

    store = TestBed.inject(Store);
  });

  it('should initialize with default state', () => {
    const state = store.selectSnapshot<TodoListStateModel>((state) => state.todoList);
    expect(state).toBeDefined();
    expect(state.todoList).toEqual([]);
  });

  it('should provide TodoListState', () => {
    const states = store.selectSnapshot((state) => state);
    expect(states).toHaveProperty('todoList');
  });
});
