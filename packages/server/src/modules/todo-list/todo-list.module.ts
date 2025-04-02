import { Module } from '@nestjs/common';
import { PrismaAdapterModule } from '@adapters/prisma/prisma.adapter.module';
import { TodoListController } from './controllers/todo-list.controller';
import { TodoListService } from './providers/todo-list.service';
import { TodoListRepository } from './providers/todo-list.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { GetTodoListHandler } from './controllers/queries/handlers';

const TodoHandlers = [GetTodoListHandler];

@Module({
  imports: [CqrsModule, PrismaAdapterModule],
  controllers: [TodoListController],
  providers: [TodoListService, TodoListRepository, ...TodoHandlers],
})
export class TodoListModule {}
