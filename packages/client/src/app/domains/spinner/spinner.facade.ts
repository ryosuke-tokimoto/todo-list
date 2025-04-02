import { inject, Injectable } from '@angular/core';
import { SpinnerStoreModule } from './store/spinner.store.module';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SpinnerAction } from './store/spinner.action';
import { SpinnerState } from './store/spinner.state';

@Injectable({
  providedIn: SpinnerStoreModule,
})
export class SpinnerFacade {
  constructor(private store: Store) {}

  isShowingSpinner$: Observable<boolean> = inject(Store).select(
    SpinnerState.isShowingSpinner,
  );

  show(): void {
    this.store.dispatch(new SpinnerAction.ShowSpinner());
  }

  hide(): void {
    this.store.dispatch(new SpinnerAction.HideSpinner());
  }
}
