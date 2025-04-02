import { Injectable } from '@nestjs/common';
import { TodoListRepository } from './todo-list.repository';
import { GetTodoListResponse } from '../controllers/dto/todo-list.dto';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoListService {
  constructor(private readonly todoListRepository: TodoListRepository) {}

  async getTodoList(): Promise<GetTodoListResponse> {
    const todos: Todo[] = await this.todoListRepository.getTodoList();

    return {
      todoList: todos.map((todo) => ({
        id: todo.id,
        title: todo.title,
        status: todo.status,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      })),
    };
  }
}
