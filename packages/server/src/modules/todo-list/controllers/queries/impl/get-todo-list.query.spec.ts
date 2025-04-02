import { GetTodoListQuery } from '.';

describe('GetTodoListQuery', () => {
  it('should create a query', () => {
    const query = new GetTodoListQuery();
    expect(query).toBeDefined();
  });
});
