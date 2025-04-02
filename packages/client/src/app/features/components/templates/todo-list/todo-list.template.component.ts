import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ITodo } from '@interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-list-template',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './todo-list.template.component.html',
})
export class TodoListTemplateComponent {
  todoList = input.required<ITodo[]>();
}
