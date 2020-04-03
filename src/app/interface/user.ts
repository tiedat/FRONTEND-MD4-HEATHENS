import {Gender} from './gender';


export interface User {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  gender?: Gender;
  dayOfBirth?: Date;
  email?: string;
}
