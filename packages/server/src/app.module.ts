import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TodoListModule } from '@modules/todo-list/todo-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/', 'dist/client/browser'),
      exclude: ['/api'],
    }),
    TodoListModule,
  ],
})
export class AppModule {}
