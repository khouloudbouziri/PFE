export interface Event {
  id: number;
  idSupervisor: number;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
}
