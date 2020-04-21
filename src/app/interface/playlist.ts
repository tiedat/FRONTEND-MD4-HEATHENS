import {IUser} from './user';


export interface IPlaylist {
  id?: number;
  name?: string;
  image?: string;
  descriptionPlaylist?: string;
  songs?: any[];
  user?: IUser;
}
