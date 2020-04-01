import {IGender} from './gender';


export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  gender?: IGender;
  dayOfBirth?: Date;
  email?: string;
}
