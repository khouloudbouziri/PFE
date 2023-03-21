import { Status } from './status';

export interface loginResponseModel extends Status {
  token: string;
  email: string;
}
