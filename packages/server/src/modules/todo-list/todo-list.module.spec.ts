import { Test } from '@nestjs/testing';
import { TodoListModule } from './todo-list.module';
import { TodoListController } from './controllers/todo-list.controller';
import { TodoListService } from './providers/todo-list.service';
import { TodoListRepository } from './providers/todo-list.repository';
import { GetTodoListHandler } from './controllers/queries/handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaAdapterModule } from '@adapters/prisma/prisma.adapter.module';

describe('TodoListModule', () => {
  it('should be defined', async () => {
    const module = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    expect(module).toBeDefined();
  });

  it('should provide TodoListController', async () => {
    const module = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    const controller = module.get<TodoListController>(TodoListController);
    expect(controller).toBeDefined();
  });

  it('should provide TodoListService', async () => {
    const module = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    const service = module.get<TodoListService>(TodoListService);
    expect(service).toBeDefined();
  });

  it('should provide TodoListRepository', async () => {
    const module = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    const repository = module.get<TodoListRepository>(TodoListRepository);
    expect(repository).toBeDefined();
  });

  it('should provide GetTodoListHandler', async () => {
    const module = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    const handler = module.get<GetTodoListHandler>(GetTodoListHandler);
    expect(handler).toBeDefined();
  });

  it('should import required modules', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    const cqrsModule = moduleRef.get(CqrsModule, { strict: false });
    const prismaModule = moduleRef.get(PrismaAdapterModule, { strict: false });

    expect(cqrsModule).toBeDefined();
    expect(prismaModule).toBeDefined();
  });
});
