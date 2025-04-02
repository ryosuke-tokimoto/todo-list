import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListFacade } from '@domains/todo-list/todo-list.facade';
import { TodoListStoreModule } from '@domains/todo-list/store/todo-list.store.module';
import { TodoListTemplateComponent } from '@components/templates/todo-list/todo-list.template.component';

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [CommonModule, TodoListTemplateComponent, TodoListStoreModule],
  templateUrl: './todo-list.page.component.html',
})
export class TodoListPageComponent {
  todoList$ = this.todoListFacade.todoList$;

  constructor(private todoListFacade: TodoListFacade) {
    this.todoListFacade.getTodoList();
  }
}
