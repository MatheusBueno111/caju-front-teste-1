import { type Registration, Status } from "~/types";

export interface RegistrationCardProps {
  registration: Registration;
}

export interface buttonMappingProps {
  label: string;
  status: Status;
  color: string;
  isVisable: boolean;
}
