import { api } from "../api";
import type { Registration, Status } from "~/types";

export const getRegistrations = async (search: string = "") => {
  const { data } = await api.get(`/registrations?cpf=${search}`);
  return data;
};

export const patchStatusRegistration = async (id: string, status: Status) => {
  const { data } = await api.patch(`/registrations/${id}`, { status });
  return data;
};

export const deleteRegistration = async (id: string) => {
  const { data } = await api.delete(`/registrations/${id}`);
  return data;
};

export const postRegistration = async (registration: Registration) => {
  const { data } = await api.post(`/registrations`, registration);
  return data;
};
