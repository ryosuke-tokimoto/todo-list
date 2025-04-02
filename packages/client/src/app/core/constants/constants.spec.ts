import { Constants } from './constants';

describe('Constants', () => {
  describe('TODO', () => {
    describe('STATUS', () => {
      it('should have correct number of statuses', () => {
        expect(Constants.TODO.STATUS).toHaveLength(3);
      });

      it('should have NEW status with correct properties', () => {
        const newStatus = Constants.TODO.STATUS.find(
          (status) => status.value === 'NEW',
        );
        expect(newStatus).toBeDefined();
        expect(newStatus?.label).toBe('TODO.STATUS.NEW');
      });

      it('should have IN_PROGRESS status with correct properties', () => {
        const inProgressStatus = Constants.TODO.STATUS.find(
          (status) => status.value === 'IN_PROGRESS',
        );
        expect(inProgressStatus).toBeDefined();
        expect(inProgressStatus?.label).toBe('TODO.STATUS.IN_PROGRESS');
      });

      it('should have COMPLETED status with correct properties', () => {
        const completedStatus = Constants.TODO.STATUS.find(
          (status) => status.value === 'COMPLETED',
        );
        expect(completedStatus).toBeDefined();
        expect(completedStatus?.label).toBe('TODO.STATUS.COMPLETED');
      });

      it('should have unique status values', () => {
        const statusValues = Constants.TODO.STATUS.map(
          (status) => status.value,
        );
        const uniqueValues = new Set(statusValues);
        expect(statusValues.length).toBe(uniqueValues.size);
      });

      it('should have translation keys for all status labels', () => {
        Constants.TODO.STATUS.forEach((status) => {
          expect(status.label).toMatch(/^TODO\.STATUS\./);
        });
      });
    });
  });
});
