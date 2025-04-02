import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store, TypedSelector } from '@ngxs/store';
import { SpinnerStoreModule } from './spinner.store.module';
import { SpinnerState, SpinnerModel } from './spinner.state';

describe('SpinnerStoreModule', () => {
  let store: Store;
  let spinnerState: TypedSelector<SpinnerModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([], {
          developmentMode: true,
        }),
        SpinnerStoreModule,
      ],
    });

    store = TestBed.inject(Store);
    spinnerState = SpinnerState as unknown as TypedSelector<SpinnerModel>;
  });

  it('should be created', () => {
    const module = TestBed.inject(SpinnerStoreModule);
    expect(module).toBeTruthy();
  });

  it('should have SpinnerState available in the store', () => {
    const state = store.selectSnapshot(spinnerState);
    expect(state).toBeDefined();
    expect(state.spinnerCount).toBe(0);
  });
});
