export const SHOW_SPINNER = 'Open_Spinner';
export const HIDE_SPINNER = 'Hide_Spinner';

export class ShowSpinner {
  static readonly type = SHOW_SPINNER;
  constructor() {}
}

export class HideSpinner {
  static readonly type = HIDE_SPINNER;
  constructor() {}
}
export const SpinnerAction = {
  SHOW_SPINNER,
  HIDE_SPINNER,
  ShowSpinner,
  HideSpinner,
};
