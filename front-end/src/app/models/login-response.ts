import { Status } from './status';
import { Visitor } from './Visitor';

export interface loginResponseModel extends Status {
  token: string;
  visitor: Visitor;
}
