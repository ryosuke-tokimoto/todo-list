import { ShowSpinner, HideSpinner, SHOW_SPINNER, HIDE_SPINNER } from './spinner.action';

describe('Spinner Actions', () => {
  describe('ShowSpinner', () => {
    it('should create an instance', () => {
      const action = new ShowSpinner();
      expect(action).toBeTruthy();
    });

    it('should have correct type', () => {
      expect(ShowSpinner.type).toBe(SHOW_SPINNER);
    });
  });

  describe('HideSpinner', () => {
    it('should create an instance', () => {
      const action = new HideSpinner();
      expect(action).toBeTruthy();
    });

    it('should have correct type', () => {
      expect(HideSpinner.type).toBe(HIDE_SPINNER);
    });
  });
});
