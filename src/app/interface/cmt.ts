import { IPlaylist } from './playlist';
import { ISong } from './song';
import { IUser } from './user';

export interface ICmt {
  id?: number;
  content?: string;
  playlist?: IPlaylist;
  song?: ISong;
  user?: IUser;
}
