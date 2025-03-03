export interface Registration {
  admissionDate: string;
  cpf: string;
  email: string;
  employeeName: string;
  id: string;
  status: Status;
}

export enum Status {
  APPROVED = "APPROVED",
  REPROVED = "REPROVED",
  REVIEW = "REVIEW",
}
