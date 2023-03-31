import { Role } from './Role';
import { Visitor } from './Visitor';

export interface Supervisor {
  visitor: Visitor;
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  password: string;
  photo_url: string;
  role: Role;
}
