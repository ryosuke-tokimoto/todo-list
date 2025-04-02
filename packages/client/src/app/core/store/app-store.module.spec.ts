import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppStoreModule } from './app-store.module';

describe('AppStoreModule', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), AppStoreModule],
    });

    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should provide Store service', () => {
    const storeService = TestBed.inject(Store);
    expect(storeService).toBeTruthy();
    expect(storeService).toBeInstanceOf(Store);
  });

  it('should have empty initial state', () => {
    const state = store.snapshot();
    expect(state).toEqual({});
  });
});
