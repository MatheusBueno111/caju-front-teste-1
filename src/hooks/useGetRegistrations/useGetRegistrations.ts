import { useQuery } from "@tanstack/react-query";
import { getRegistrations } from "~/services/registrationFetchers";

export const useGetRegistrations = () => {
  const { data: registrations } = useQuery({
    queryKey: ["registrations"],
    queryFn: getRegistrations,
  });

  return {
    registrations,
  };
};
