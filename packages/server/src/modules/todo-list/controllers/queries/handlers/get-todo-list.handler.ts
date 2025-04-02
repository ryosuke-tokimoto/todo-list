import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTodoListQuery } from '../impl';
import { TodoListService } from '@modules/todo-list/providers/todo-list.service';
import { GetTodoListResponse } from '../../dto/todo-list.dto';

@QueryHandler(GetTodoListQuery)
export class GetTodoListHandler
  implements IQueryHandler<GetTodoListQuery>
{
  constructor(private readonly todoListService: TodoListService) {}

  async execute(): Promise<GetTodoListResponse> {
    return await this.todoListService.getTodoList();
  }
}
