import { Supervisor } from './Supervisor';
import { Visitor } from './Visitor';

export interface IntershipOffer {
  topic: string;
  type: string;
  company: string;
  supervisor: string;
  address: string;
  duration: number;
  required_work: string;
  technical_environement: string;
  required_profile: string;
  interns_number: number;
  renumerete: boolean;
  working_from_home: boolean;
}
