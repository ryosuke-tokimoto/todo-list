import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { TodoListFacade } from './todo-list.facade';
import { TodoListApiService } from './todo-list-api.service';
import { TodoListState } from './store/todo-list.state';
import { TodoListAction } from './store/todo-list.action';
import { ITodo } from '@interfaces/todo-list.interface';

describe('TodoListFacade', () => {
  let facade: TodoListFacade;
  let store: Store;
  let apiService: jest.Mocked<TodoListApiService>;

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
    const apiServiceMock = {
      getTodoList: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodoListState])],
      providers: [TodoListFacade, { provide: TodoListApiService, useValue: apiServiceMock }],
    });

    facade = TestBed.inject(TodoListFacade);
    store = TestBed.inject(Store);
    apiService = TestBed.inject(TodoListApiService) as jest.Mocked<TodoListApiService>;
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('getTodoList', () => {
    it('should get todo list and update store', (done) => {
      apiService.getTodoList.mockReturnValue(of({ todoList: mockTodos }));

      facade.getTodoList();

      facade.todoList$.subscribe((todos) => {
        expect(todos).toEqual(mockTodos);
        done();
      });

      expect(apiService.getTodoList).toHaveBeenCalled();
      expect(store.selectSnapshot(TodoListState.getTodoList)).toEqual(mockTodos);
    });
  });
});
