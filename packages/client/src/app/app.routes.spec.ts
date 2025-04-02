import { routes } from './app.routes';
import { TodoListPageComponent } from './features/components/pages/todo-list/todo-list.page.component';

describe('AppRoutes', () => {
  it('should have correct components for each route', () => {
    expect(routes[0].component).toBe(TodoListPageComponent);
  });

  it('should have correct paths for each route', () => {
    expect(routes[0].path).toBe('');
  });

  it('should have correct number of routes', () => {
    expect(routes).toHaveLength(2);
  });
});
