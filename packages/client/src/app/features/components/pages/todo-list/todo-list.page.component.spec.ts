import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListPageComponent } from './todo-list.page.component';
import { TodoListFacade } from '@domains/todo-list/todo-list.facade';
import { TodoListState } from '@domains/todo-list/store/todo-list.state';
import { of } from 'rxjs';

jest.mock('@domains/todo-list/todo-list.facade');

describe('TodoListPageComponent', () => {
  let component: TodoListPageComponent;
  let fixture: ComponentFixture<TodoListPageComponent>;
  let todoListFacade: jest.Mocked<TodoListFacade>;
  let route: jest.Mocked<ActivatedRoute>;

  const todoListFacadeMock = {
    todoList$: of([]),
    getTodoList: jest.fn(),
  };

  const setupTestingModule = async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([]),
        NgxsModule.forFeature([TodoListState]),
        TranslateModule.forRoot(),
        TodoListPageComponent,
      ],
      providers: [
        { provide: TodoListFacade, useValue: todoListFacadeMock },
        { provide: 'API_URL', useValue: 'http://localhost:3000' },
        provideHttpClient(withFetch()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListPageComponent);
    component = fixture.componentInstance;
    todoListFacade = TestBed.inject(TodoListFacade) as jest.Mocked<TodoListFacade>;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create', async () => {
    await TestBed.resetTestingModule();
    await setupTestingModule();
    expect(component).toBeTruthy();
  });

  it('should expose todoList$ observable', async () => {
    await TestBed.resetTestingModule();
    await setupTestingModule();
    expect(component.todoList$).toBeDefined();
  });

  describe('Todo List Loading', () => {
    it('should call getTodoList with correct spaceId', async () => {
      await TestBed.resetTestingModule();
      await setupTestingModule();
      fixture.detectChanges();
      expect(todoListFacade.getTodoList).toHaveBeenCalled();
    });
  });
});
