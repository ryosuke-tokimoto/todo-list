import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store, TypedSelector } from '@ngxs/store';
import { SpinnerState, SpinnerModel } from './spinner.state';
import { ShowSpinner, HideSpinner } from './spinner.action';

describe('SpinnerState', () => {
  let store: Store;
  let spinnerState: TypedSelector<SpinnerModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SpinnerState])],
    });

    store = TestBed.inject(Store);
    spinnerState = SpinnerState as unknown as TypedSelector<SpinnerModel>;
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should have initial state', () => {
    const state = store.selectSnapshot(spinnerState);
    expect(state.spinnerCount).toBe(0);
  });

  it('should increment spinnerCount when showing spinner', () => {
    store.dispatch(new ShowSpinner());
    const state = store.selectSnapshot(spinnerState);
    expect(state.spinnerCount).toBe(1);
  });

  it('should decrement spinnerCount when hiding spinner', () => {
    store.dispatch(new ShowSpinner());
    store.dispatch(new HideSpinner());
    const state = store.selectSnapshot(spinnerState);
    expect(state.spinnerCount).toBe(0);
  });

  it('should not go below 0 when hiding spinner', () => {
    store.dispatch(new HideSpinner());
    const state = store.selectSnapshot(spinnerState);
    expect(state.spinnerCount).toBe(0);
  });

  it('should correctly indicate if spinner is showing', () => {
    expect(store.selectSnapshot(SpinnerState.isShowingSpinner)).toBe(false);

    store.dispatch(new ShowSpinner());
    expect(store.selectSnapshot(SpinnerState.isShowingSpinner)).toBe(true);

    store.dispatch(new HideSpinner());
    expect(store.selectSnapshot(SpinnerState.isShowingSpinner)).toBe(false);
  });
});
