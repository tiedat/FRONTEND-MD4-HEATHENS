import { IUser } from './user';

export interface ISong {
  id?: number;
  name?: string;
  description?: string;
  fileMp3?: string;
  image?: string;
  numberOfPlays?: number;
  user?: IUser;
}
