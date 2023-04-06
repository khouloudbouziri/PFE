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
  // private ToDoList toDoList;
  company_name: string;
  tax_registration_number: string;
  size: bigint;
  sector: string;
  domain: string;
  logo_url: string;
  companyDepartement: string;
  // private JobTitle jobTitle;

  role: Role;
}
