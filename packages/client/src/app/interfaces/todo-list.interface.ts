export interface ITodo {
  id: number;
  title: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoList {
  todoList: ITodo[];
}
