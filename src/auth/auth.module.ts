import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [
    UserService, 
    AuthService,
   ]
})
export class AuthModule {}
