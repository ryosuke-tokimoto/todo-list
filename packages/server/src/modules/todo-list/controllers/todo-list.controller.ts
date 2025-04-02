import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import {
  GetTodoListResponse,
} from './dto/todo-list.dto';
import { QueryBus } from '@nestjs/cqrs';
import { GetTodoListQuery } from './queries/impl';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly queryBus: QueryBus) {}

  @Post('list')
  @HttpCode(HttpStatus.OK)
  async getTodoList(
  ): Promise<GetTodoListResponse> {
    return await this.queryBus.execute(
      new GetTodoListQuery(),
    );
  }
}
