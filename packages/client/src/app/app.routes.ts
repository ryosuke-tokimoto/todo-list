import { Routes } from '@angular/router';
import { TodoListPageComponent } from './features/components/pages/todo-list/todo-list.page.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListPageComponent,
  },
  {
    path: 'todo/list',
    component: TodoListPageComponent,
  },
];
