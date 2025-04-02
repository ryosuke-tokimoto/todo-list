import { Test, TestingModule } from '@nestjs/testing';
import { $Enums } from '@prisma/client';
import { TodoListService } from '@modules/todo-list/providers/todo-list.service';
import { GetTodoListHandler } from '.';

describe('GetTodoListHandler', () => {
  let handler: GetTodoListHandler;
  let todoListService: jest.Mocked<TodoListService>;

  const mockTodoListResponse = {
    todoList: [
      {
        id: 1,
        title: 'Test Todo',
        status: $Enums.Status.NEW,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  beforeEach(async () => {
    const mockService = {
      getTodoList: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetTodoListHandler,
        { provide: TodoListService, useValue: mockService },
      ],
    }).compile();

    handler = module.get<GetTodoListHandler>(GetTodoListHandler);
    todoListService = module.get(TodoListService);
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('execute', () => {
    it('should get todo list', async () => {
      todoListService.getTodoList.mockResolvedValue(mockTodoListResponse);

      const result = await handler.execute();

      expect(result).toEqual(mockTodoListResponse);
      expect(todoListService.getTodoList).toHaveBeenCalled();
    });
  });
});
