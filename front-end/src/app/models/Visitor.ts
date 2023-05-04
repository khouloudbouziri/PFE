import { Role } from './Role';

export interface Visitor {
  id: bigint;
  firstname: string;
  lastname: string;
  adress: string;
  phone_number: string;
  email: string;
  password: string;
  photo_url: string;
  university: string;
  universityDept: string;
  company_name: string;
  tax_registration_number: string;
  size: bigint;
  sector: string;
  domain: string;
  logo_url: string;
  companyDepartement: string;
  role: Role;
  favoriteOffers: number[];
}
