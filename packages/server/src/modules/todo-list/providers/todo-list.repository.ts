import { Injectable } from '@nestjs/common';
import { PrismaAdapter } from '@adapters/prisma/prisma.adapter';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoListRepository {
  constructor(private readonly prisma: PrismaAdapter) {}

  async getTodoList(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }
}
