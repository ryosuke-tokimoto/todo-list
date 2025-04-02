import { $Enums } from '@prisma/client';

export class Todo {
  id: number;
  title: string;
  status: $Enums.Status;
  createdAt: Date;
  updatedAt: Date;
}

export class GetTodoListResponse {
  todoList: Todo[];
}
