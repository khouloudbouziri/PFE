import { Status } from './status';
import { Supervisor } from './Supervisor';
import { Visitor } from './Visitor';

export interface loginResponseModel extends Status {
  token: string;
  visitor: Visitor;
  supervisor: Supervisor;
}
