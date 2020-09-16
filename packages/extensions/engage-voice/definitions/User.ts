import {DateTime, Role} from './index';

class User {
  children?: User[];

  creationDate?: DateTime;

  enabled?: boolean;

  firstName?: string;

  fullName?: string;

  lastName?: string;

  parentPath?: string;

  phoneNumber?: string;

  roles?: Role[];

  rootUser?: boolean;

  userId?: number;

  userName?: string;
}

export default User;
