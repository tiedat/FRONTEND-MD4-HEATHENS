import { IUser } from './user';


export interface IPlaylist {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  numberOfPlay?: number;
  songs?: any[];
  user?: IUser;
}
