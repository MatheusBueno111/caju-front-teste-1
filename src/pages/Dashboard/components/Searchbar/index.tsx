import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton } from "~/components/Buttons/IconButton";
import Button from "~/components/Buttons";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import { cpfMask } from "~/utils/cpfMask";
import * as S from "./styles";

interface SearchBarProps {
  search: string;
  handleSearch: (value: string) => void;
}

export const SearchBar = ({ search, handleSearch }: SearchBarProps) => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        value={cpfMask(search)}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
