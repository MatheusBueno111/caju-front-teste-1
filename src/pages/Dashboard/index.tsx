import { Collumns } from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useState } from "react";
import { cpfRemoveMask } from "~/utils/cpfRemoveMask";
import { useGetRegistrations } from "~/hooks/useRegistration";

export const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const { registrations, isLoadingRegistrations, isRefetchingRegistrations } =
    useGetRegistrations(cpfRemoveMask(search));

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <S.Container>
      <SearchBar handleSearch={handleSearch} search={search} />
      <Collumns
        registrations={registrations}
        isLoading={isLoadingRegistrations || isRefetchingRegistrations}
      />
    </S.Container>
  );
};
