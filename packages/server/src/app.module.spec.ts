import { Test, TestingModule } from '@nestjs/testing';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppModule } from './app.module';
import { TodoListModule } from './modules/todo-list/todo-list.module';

describe('AppModule', () => {
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(moduleRef).toBeDefined();
  });

  it('should configure ServeStaticModule correctly', () => {
    const imports = Reflect.getMetadata('imports', AppModule);
    const serveStaticModule = imports.find(
      (module: any) => module.module === ServeStaticModule,
    );

    expect(serveStaticModule).toBeDefined();
    expect(serveStaticModule.providers[0].useValue).toEqual([
      {
        rootPath: join(__dirname, '../../client/', 'dist/client/browser'),
        exclude: ['/api'],
      },
    ]);
  });

  it('should import all required feature modules', () => {
    const imports = Reflect.getMetadata('imports', AppModule);
    const moduleClasses = imports.map((module: any) =>
      module.module ? module.module : module,
    );

    expect(moduleClasses).toContain(TodoListModule);
  });

  describe('Feature Modules', () => {
    it('should initialize TodoListModule', () => {
      const todoListModule = moduleRef.get(TodoListModule);
      expect(todoListModule).toBeDefined();
    });
  });

  // オプション: 静的ファイル配信の設定をテスト
  describe('ServeStatic Configuration', () => {
    it('should have correct static file serving path', () => {
      const imports = Reflect.getMetadata('imports', AppModule);
      const serveStaticConfig = imports.find(
        (module: any) => module.module === ServeStaticModule,
      ).providers[0].useValue;

      expect(serveStaticConfig[0].rootPath).toBe(
        join(__dirname, '../../client/', 'dist/client/browser'),
      );
      expect(serveStaticConfig[0].exclude).toEqual(['/api']);
    });
  });
});
