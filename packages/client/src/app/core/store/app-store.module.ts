import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [NgxsModule.forRoot([], { developmentMode: true })],
})
export class AppStoreModule {}
