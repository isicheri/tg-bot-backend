import { sign, verify } from 'jsonwebtoken';

export class JsonwebtokenService {
  signToken(payload: { username: string }) {
    return sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1hr' });
  }

  verifyToken(token: string) {
    return verify(token, process.env.JWT_SECRET as string) as Jwtpayload;
  }
}

export type Jwtpayload = {
  username: string;
};
