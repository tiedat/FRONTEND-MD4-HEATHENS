import {IUser} from './user';


export interface IPlaylist {
  id?: number;
  name?: string;
  img?: string;
  descriptionPlaylist?: string;
  songs?: any[];
  user?: IUser;
}
