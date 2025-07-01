interface UserType {
  id: string;
  username: string;
}

export type PassportUser = Pick<UserType, 'id' | 'username'>;
