import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerFacade } from '@domains/spinner/spinner.facade';
import { SpinnerStoreModule } from '@domains/spinner/store/spinner.store.module';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  standalone: true,
  imports: [CommonModule, SpinnerStoreModule],
})
export class SpinnerComponent {
  constructor(private spinnerFacade: SpinnerFacade) {}

  isShowingSpinner$ = this.spinnerFacade.isShowingSpinner$;
}
