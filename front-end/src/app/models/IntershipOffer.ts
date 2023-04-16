export interface IntershipOffer {
  id_intership_offre: bigint;
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
  candidacy_number: bigint;
  saved: boolean;
  creation_date: Date;
}
