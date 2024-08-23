import { api } from "../api";

export const getRegistrations = async () => {
  const { data } = await api.get("/registrations");
  return data;
};
