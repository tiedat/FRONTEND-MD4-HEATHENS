import { IUser } from './user';
import { ITag} from './tag';

export interface ISong {
  id?: number;
  name?: string;
  description?: string;
  fileMp3?: string;
  image?: string;
  numberOfPlays?: number;
  tags?: ITag[];
  user?: IUser;
  initTime?: Date;
}
