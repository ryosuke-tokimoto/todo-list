import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SpinnerFacade } from './spinner.facade';
import { SpinnerState } from './store/spinner.state';
import { SpinnerAction } from './store/spinner.action';

describe('SpinnerFacade', () => {
  let facade: SpinnerFacade;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SpinnerState])],
      providers: [SpinnerFacade],
    });

    facade = TestBed.inject(SpinnerFacade);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('show', () => {
    it('should dispatch ShowSpinner action', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      facade.show();
      expect(dispatchSpy).toHaveBeenCalledWith(new SpinnerAction.ShowSpinner());
    });
  });

  describe('hide', () => {
    it('should dispatch HideSpinner action', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      facade.hide();
      expect(dispatchSpy).toHaveBeenCalledWith(new SpinnerAction.HideSpinner());
    });
  });

  describe('isShowingSpinner$', () => {
    it('should select spinner state from store', (done) => {
      store.dispatch(new SpinnerAction.ShowSpinner());

      facade.isShowingSpinner$.subscribe((isShowing) => {
        expect(isShowing).toBe(true);
        done();
      });
    });
  });
});
