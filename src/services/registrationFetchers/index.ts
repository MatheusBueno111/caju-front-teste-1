import { api } from "../api";
import type { Status } from "~/types";

export const getRegistrations = async (search: string = "") => {
  const { data } = await api.get(`/registrations?cpf=${search}`);
  return data;
};

export const patchStatusRegistration = async (id: string, status: Status) => {
  const { data } = await api.patch(`/registrations/${id}`, { status });
  return data;
};

export const deleteRegistration = async (id: string) => {
  const response = await api.delete(`/registrations/${id}`);
  console.log(response);
  return response.data;
};
