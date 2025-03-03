import { ButtonSmall } from "~/components/Buttons";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { useDeleteRegistration } from "~/hooks/useRegistration/useDeleteRegistration";
import { usePatchStatusRegistration } from "~/hooks/useRegistration";
import { type buttonMappingProps, type RegistrationCardProps } from "./types";
import { Status } from "~/types";
import * as S from "./styles";

export const RegistrationCard = ({ registration }: RegistrationCardProps) => {
  const { patchStatusRegistrationMutate } = usePatchStatusRegistration();
  const { deleteRegistrationMutate } = useDeleteRegistration();

  const buttonMapping: buttonMappingProps[] = [
    {
      label: "Reprovar",
      status: Status.REPROVED,
      color: "rgb(255, 145, 154)",
      isVisable: registration.status === "REVIEW",
    },
    {
      label: "Aprovar",
      status: Status.APPROVED,
      color: "rgb(155, 229, 155)",
      isVisable: registration.status === "REVIEW",
    },
    {
      label: "Revisar novamente",
      status: Status.REVIEW,
      color: "#ff8858",
      isVisable:
        registration.status === "REPROVED" ||
        registration.status === "APPROVED",
    },
  ];

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{registration.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{registration.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{registration.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {buttonMapping.map(({ color, label, status, isVisable }) =>
          isVisable ? (
            <ButtonSmall
              key={status}
              bgcolor={color}
              onClick={() => {
                patchStatusRegistrationMutate({
                  id: registration.id,
                  status: status,
                });
              }}
            >
              {label}
            </ButtonSmall>
          ) : null
        )}
        <HiOutlineTrash
          onClick={() => {
            deleteRegistrationMutate({ id: registration.id });
          }}
        />
      </S.Actions>
    </S.Card>
  );
};
