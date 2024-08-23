import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useGetRegistrations } from "~/hooks/useGetRegistrations/useGetRegistrations";

const DashboardPage = () => {
  const { registrations } = useGetRegistrations();

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;