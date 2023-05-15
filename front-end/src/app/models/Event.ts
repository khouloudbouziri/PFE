export interface Event {
  id: number;
  idSupervisor: number;
  idIntern: number;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  type: string;
}
