import { useMutation } from "@tanstack/react-query";
import { queryClient } from "~/services/queryClient";
import { postRegistration } from "~/services/registrationFetchers";
import { Registration } from "~/types";

export const usePostRegistration = () => {
  const { mutateAsync: postRegistrationMutate } = useMutation({
    mutationFn: (newRegistration: Registration) => {
      return postRegistration(newRegistration);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["registrations"],
        refetchType: "all",
      });
    },
  });

  return { postRegistrationMutate };
};
