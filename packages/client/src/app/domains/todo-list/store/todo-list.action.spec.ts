import { TodoListAction } from './todo-list.action';
import { ITodo } from '@interfaces/todo-list.interface';

describe('TodoListAction', () => {
  describe('SetTodoList', () => {
    it('should create SetTodoList action with correct properties', () => {
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

      const action = new TodoListAction.SetTodoList(mockTodos);

      expect(action.todoList).toEqual(mockTodos);
    });
  });
});
