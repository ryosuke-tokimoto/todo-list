import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HideSpinner, ShowSpinner } from './spinner.action';
import { patch } from '@ngxs/store/operators';

export interface SpinnerModel {
  spinnerCount: number;
}

@State<SpinnerModel>({
  name: 'spinner',
  defaults: {
    spinnerCount: 0,
  },
})
@Injectable()
export class SpinnerState {
  @Selector()
  static isShowingSpinner(state: SpinnerModel): boolean {
    return state.spinnerCount > 0;
  }

  @Action(ShowSpinner)
  async showSpinner(ctx: StateContext<SpinnerModel> /*, action: ShowSpinner*/) {
    ctx.setState(
      patch({
        spinnerCount: ctx.getState().spinnerCount + 1,
      }),
    );
  }

  @Action(HideSpinner)
  async hideSpinner(ctx: StateContext<SpinnerModel> /*, action: HideSpinner*/) {
    const currentCount = ctx.getState().spinnerCount;
    if (currentCount > 0) {
      ctx.setState(
        patch({
          spinnerCount: currentCount - 1,
        }),
      );
    }
  }
}
