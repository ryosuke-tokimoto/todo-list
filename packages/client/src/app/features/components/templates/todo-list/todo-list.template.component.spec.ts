import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TodoListTemplateComponent } from './todo-list.template.component';
import { ITodo } from '@interfaces/todo-list.interface';
import { DatePipe } from '@angular/common';

describe('TodoListTemplateComponent', () => {
  let component: TodoListTemplateComponent;
  let fixture: ComponentFixture<TodoListTemplateComponent>;

  const mockTodos: ITodo[] = [
    {
      id: 1,
      title: 'Test Title 1',
      status: 'NEW',
      createdAt: new Date('2025-04-02'),
      updatedAt: new Date('2025-04-02'),
    },
    {
      id: 2,
      title: 'Test Title 2',
      status: 'PROGRESS',
      createdAt: new Date('2025-04-03'),
      updatedAt: new Date('2025-04-03'),
    },
  ];

  const setupTestingModule = async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([]),
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        TodoListTemplateComponent,
        DatePipe,
      ],
      providers: [{ provide: 'API_URL', useValue: 'http://localhost:3000' }, provideHttpClient(withFetch())],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListTemplateComponent);
    component = fixture.componentInstance;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create component', async () => {
    await TestBed.resetTestingModule();
    await setupTestingModule();
    expect(component).toBeTruthy();
  });

  describe('Todo list display', () => {
    beforeEach(async () => {
      await TestBed.resetTestingModule();
      await setupTestingModule();
      fixture.componentRef.setInput('todoList', mockTodos);
      fixture.detectChanges();
    });

    it('should display the correct number of todos', () => {
      const todoElements = fixture.nativeElement.querySelectorAll('article');
      expect(todoElements.length).toBe(mockTodos.length);
    });

    it('should display todo titles', () => {
      const titleElements = fixture.nativeElement.querySelectorAll('h2');
      titleElements.forEach((element: HTMLElement, index: number) => {
        expect(element.textContent?.trim()).toBe(mockTodos[index].title);
      });
    });

    it('should display todo dates', () => {
      const dateElements = fixture.nativeElement.querySelectorAll('time');
      expect(dateElements[0].textContent?.trim()).toBe('2025/04/02');
      expect(dateElements[1].textContent?.trim()).toBe('2025/04/03');
    });

    it('should display todo status', () => {
      const statusElements = fixture.nativeElement.querySelectorAll('span');
      statusElements.forEach((element: HTMLElement, index: number) => {
        expect(element.textContent?.trim()).toBe(mockTodos[index].status);
      });
    });

    // RouterLink test is removed as the template doesn't have router links
  });
});
