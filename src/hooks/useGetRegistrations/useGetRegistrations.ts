import { useQuery } from "@tanstack/react-query";
import { getRegistrations } from "~/services/registrationFetchers";

export const useGetRegistrations = (search?: string) => {
  const { data: registrations } = useQuery({
    queryKey: ["registrations", search],
    queryFn: () => getRegistrations(search),
  });

  return {
    registrations,
  };
};
