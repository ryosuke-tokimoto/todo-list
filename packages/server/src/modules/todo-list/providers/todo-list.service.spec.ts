import { Test } from '@nestjs/testing';
import { $Enums, Todo } from '@prisma/client';
import { TodoListService } from './todo-list.service';
import { TodoListRepository } from './todo-list.repository';
import { GetTodoListResponse } from '../controllers/dto/todo-list.dto';

describe('TodoListService', () => {
  let service: TodoListService;
  let todoListRepository: TodoListRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TodoListService,
        {
          provide: TodoListRepository,
          useValue: {
            getTodoList: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
    todoListRepository = module.get<TodoListRepository>(TodoListRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTodoList', () => {
    it('should return todo list', async () => {
      const mockTodo: Todo = {
        id: 1,
        title: 'Test Todo',
        description: 'Test Description',
        status: $Enums.Status.NEW,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const resultTodo: GetTodoListResponse = {
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

      jest.spyOn(todoListRepository, 'getTodoList').mockResolvedValue([mockTodo]);

      const result = await service.getTodoList();

      expect(result).toEqual(resultTodo);
      expect(todoListRepository.getTodoList).toHaveBeenCalled();
    });
  });
});
