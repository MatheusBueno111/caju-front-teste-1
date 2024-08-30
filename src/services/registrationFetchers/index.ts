import { cpfRemoveMask } from "~/utils/cpfRemoveMask";
import { api } from "../api";

export const getRegistrations = async (search = "") => {
  const formattedSearch = cpfRemoveMask(search);
  const { data } = await api.get(`/registrations?cpf=${formattedSearch}`);
  return data;
};
