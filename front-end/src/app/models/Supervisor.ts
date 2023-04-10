import { Role } from './Role';

export interface Supervisor {
  id: bigint;
  visitor: bigint;
  firstname: string;
  lastname: string;
  address: string;
  phone_number: string;
  email: string;
  password: string;
  photo_url: string;
  role: Role;
}
