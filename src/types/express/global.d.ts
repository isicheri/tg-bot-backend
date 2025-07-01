import { PassportUser } from '../../modules/user/types/user.types';

declare global {
  namespace Express {
    interface User extends PassportUser {}
  }
}
