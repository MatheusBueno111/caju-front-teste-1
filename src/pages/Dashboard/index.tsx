import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useGetRegistrations } from "~/hooks/useGetRegistrations/useGetRegistrations";
import { useState } from "react";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const { registrations } = useGetRegistrations(search);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <S.Container>
      <SearchBar handleSearch={handleSearch} search={search} />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
