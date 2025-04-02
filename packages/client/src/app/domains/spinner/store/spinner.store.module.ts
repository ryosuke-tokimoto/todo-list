import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SpinnerState } from './spinner.state';

@NgModule({
  imports: [NgxsModule.forFeature([SpinnerState])],
})
export class SpinnerStoreModule {}
