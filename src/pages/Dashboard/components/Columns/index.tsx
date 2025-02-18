import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { Skeleton } from "~/components/Skeleton";
import { type CollumnsProps } from "./types";

const allColumns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

const Collumns = ({ registrations, isLoading }: CollumnsProps) => {
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
                {isLoading ? (
                  <Skeleton quantity={2} />
                ) : (
                  registrations?.map((registration) =>
                    registration.status === collum.status ? (
                      <RegistrationCard
                        registration={registration}
                        key={registration.id}
                      />
                    ) : null
                  )
                )}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
