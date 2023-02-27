import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // calling service
  constructor(private authService: AuthService) {}
  //   defining request type & function
  @Post('signup')
  signup() {
    // return service
    return this.authService.signup();
  }
  @Post('signin')
  signin() {
    // return service
    return this.authService.signin();
  }
}
