import { JwtModuleOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
  signOptions: {
    expiresIn: process.env.JWT_EXPIRATION_TIME || '1h',
  },
};
