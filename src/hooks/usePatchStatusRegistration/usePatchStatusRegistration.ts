import { useMutation } from "@tanstack/react-query";
import { queryClient } from "~/services/queryClient";
import {
  patchStatusRegistration,
} from "~/services/registrationFetchers";
import { Status } from "~/types";

export const usePatchStatusRegistration = () => {
  const { mutateAsync: patchStatusRegistrationMutate } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: Status }) => {
      return patchStatusRegistration(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["registrations"],
        refetchType: "all",
      });
    },
  });

  return { patchStatusRegistrationMutate };
};
