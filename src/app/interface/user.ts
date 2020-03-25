import {EnumValue} from '@angular/compiler-cli/src/ngtsc/partial_evaluator';

export interface User {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  gender: Gender;
  dayOfBirth?: Date;
  email?: string;
}
