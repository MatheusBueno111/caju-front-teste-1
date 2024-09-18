import { useMutation } from "@tanstack/react-query";
import { queryClient } from "~/services/queryClient";
import { deleteRegistration } from "~/services/registrationFetchers";

export const useDeleteRegistration = () => {
  const { mutateAsync: deleteRegistrationMutate } = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return deleteRegistration(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["registrations"],
        refetchType: "all",
      });
    },
  });

  return {
    deleteRegistrationMutate,
  };
};
