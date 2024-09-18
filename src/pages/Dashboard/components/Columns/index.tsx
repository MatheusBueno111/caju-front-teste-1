import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { Registration } from "~/types";

const allColumns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

interface CollumnsProps {
  registrations: Registration[];
}

const Collumns = ({ registrations }: CollumnsProps) => {
  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrations?.map((registration) => {
                  if (registration.status === collum.status) {
                    return (
                      <RegistrationCard
                        registration={registration}
                        key={registration.id}
                      />
                    );
                  }
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
