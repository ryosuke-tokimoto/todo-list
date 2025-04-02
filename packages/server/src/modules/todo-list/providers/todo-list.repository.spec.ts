import { Test } from '@nestjs/testing';
import { TodoListRepository } from './todo-list.repository';
import { PrismaAdapter } from '@adapters/prisma/prisma.adapter';
import { Todo } from '@prisma/client';
import { $Enums } from '@prisma/client';

describe('TodoListRepository', () => {
  let repository: TodoListRepository;
  let prisma: PrismaAdapter;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TodoListRepository,
        {
          provide: PrismaAdapter,
          useValue: {
            todo: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    repository = module.get<TodoListRepository>(TodoListRepository);
    prisma = module.get<PrismaAdapter>(PrismaAdapter);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getTodoList', () => {
    it('should return todo list', async () => {
      const mockTodo: Todo = {
        id: 1,
        title: 'Test Todo',
        description: 'Test Description',
        status: $Enums.Status.COMPLETED,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prisma.todo, 'findMany').mockResolvedValue([mockTodo]);

      const result = await repository.getTodoList();

      expect(result).toEqual([mockTodo]);
      expect(prisma.todo.findMany).toHaveBeenCalled();
    });

    it('should return empty list when no todos found', async () => {
      jest.spyOn(prisma.todo, 'findMany').mockResolvedValue([]);

      const result = await repository.getTodoList();

      expect(result).toEqual([]);
      expect(prisma.todo.findMany).toHaveBeenCalled();
    });
  });
});
