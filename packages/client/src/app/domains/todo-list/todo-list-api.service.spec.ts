import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TodoListApiService } from './todo-list-api.service';
import { ITodo } from '@interfaces/todo-list.interface';

describe('TodoListApiService', () => {
  let service: TodoListApiService;
  let httpMock: HttpTestingController;
  const mockApiUrl = 'http://localhost:3000';

  const mockTodos: ITodo[] = [
    {
      id: 1,
      title: 'Test Todo 1',
      status: 'NEW',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Test Todo 2',
      status: 'IN_PROGRESS',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListApiService,
        { provide: 'API_URL', useValue: mockApiUrl },
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(TodoListApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodoList', () => {
    it('should get todo list', (done) => {
      service.getTodoList().subscribe((response: { todoList: ITodo[] }) => {
        expect(response.todoList).toEqual(mockTodos);
        done();
      });

      const req = httpMock.expectOne(`${mockApiUrl}/todo-list/list`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual({});
      req.flush({ todoList: mockTodos });
    });
  });
});
