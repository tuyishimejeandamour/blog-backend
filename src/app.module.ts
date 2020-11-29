import { UserController } from './auth/user/user.controller';
import { BlogModule } from './blog/blog.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    AuthModule,
  ],
  controllers: [
    UserController, AppController],
  providers: [AppService],
})
export class AppModule { }
