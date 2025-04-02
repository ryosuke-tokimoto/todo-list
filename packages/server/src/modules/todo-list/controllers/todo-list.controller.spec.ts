import { Test } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { GetTodoListQuery } from './queries/impl';
import { GetTodoListResponse, Todo } from './dto/todo-list.dto';
import { QueryBus } from '@nestjs/cqrs';
import { $Enums } from '@prisma/client';

describe('TodoListController', () => {
  let controller: TodoListController;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTodoList', () => {
    it('should return todo list', async () => {
      const mockTodoListResponse: GetTodoListResponse = {
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

      jest.spyOn(queryBus, 'execute').mockResolvedValue(mockTodoListResponse);

      const result = await controller.getTodoList();

      expect(result).toEqual(mockTodoListResponse);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetTodoListQuery());
    });
  });
});
