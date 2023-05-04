export interface Candidacy {
  id_candidacy: number;
  id_intershipOffer: number;
  idIntern: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  address: string;
  address_code: string;
  university: string;
  mention: string;
  university_department: string;
  level: string;
  skills: string;
  did_intership: boolean;
  resume: Blob;
  linkedIn_url: string;
  status:String;
}
