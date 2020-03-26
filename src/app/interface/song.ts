import {User} from './user';

export interface ISong {
  id?: number;
  name?: string;
  descriptionSong?: string;
  fileMp3?: string;
  image?: string;
  numberOfPlays?: number;
  user?: User;
}
