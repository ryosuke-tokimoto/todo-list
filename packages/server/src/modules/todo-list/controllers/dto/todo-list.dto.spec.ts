import { Todo, GetTodoListResponse } from './todo-list.dto';
import { Status } from '@prisma/client';

describe('TodoList DTO', () => {
  describe('Todo', () => {
    it('should create a valid Todo object', () => {
      const todo = new Todo();
      todo.id = 1;
      todo.title = 'Test Todo';
      todo.status = Status.NEW;
      todo.createdAt = new Date();
      todo.updatedAt = new Date();

      expect(todo).toBeDefined();
      expect(todo.id).toBe(1);
      expect(todo.title).toBe('Test Todo');
      expect(todo.status).toBe(Status.NEW);
      expect(todo.createdAt).toBeInstanceOf(Date);
      expect(todo.updatedAt).toBeInstanceOf(Date);
    });

    it('should create a Todo object with constructor', () => {
      const todo = new Todo();
      expect(todo).toBeDefined();
    });
  });

  describe('GetTodoListResponse', () => {
    it('should create a valid GetTodoListResponse object', () => {
      const todo = new Todo();
      todo.id = 1;
      todo.title = 'Test Todo';
      todo.status = Status.NEW;
      todo.createdAt = new Date();
      todo.updatedAt = new Date();

      const response = new GetTodoListResponse();
      response.todoList = [todo];

      expect(response).toBeDefined();
      expect(response.todoList).toBeDefined();
      expect(Array.isArray(response.todoList)).toBe(true);
      expect(response.todoList.length).toBe(1);
      expect(response.todoList[0]).toEqual(todo);
    });

    it('should create a GetTodoListResponse with empty list', () => {
      const response = new GetTodoListResponse();
      response.todoList = [];

      expect(response).toBeDefined();
      expect(response.todoList).toBeDefined();
      expect(Array.isArray(response.todoList)).toBe(true);
      expect(response.todoList.length).toBe(0);
    });

    it('should create a GetTodoListResponse with constructor', () => {
      const response = new GetTodoListResponse();
      expect(response).toBeDefined();
    });
  });
});
