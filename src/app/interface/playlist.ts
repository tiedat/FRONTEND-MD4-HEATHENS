import {IUser} from './user';


export interface IPlaylist {
  id?: number;
  name?: string;
  descriptionPlaylist?: string;
  songs?: [];
  user?: IUser;
}
