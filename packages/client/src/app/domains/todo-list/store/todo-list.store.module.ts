import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TodoListState } from './todo-list.state';

@NgModule({
  imports: [NgxsModule.forFeature([TodoListState])],
})
export class TodoListStoreModule {}
