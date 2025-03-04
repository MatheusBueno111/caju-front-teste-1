import { TextField } from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostRegistration } from "~/hooks/useRegistration/usePostRegistration";
import { Status } from "~/types";
import { v4 as uuidv4 } from "uuid";
import { formatDateToUTC } from "~/utils/formatDateToUTC";
import { format } from "date-fns";
import { NewRegistrationFormData, NewRegistrationSchema } from "./schema";

export const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };
  const { postRegistrationMutate } = usePostRegistration();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewRegistrationFormData>({
    resolver: zodResolver(NewRegistrationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<NewRegistrationFormData> = (data) => {
    const { name, admissionDate, email, cpf } = data;
    const admissionDateUTC = formatDateToUTC(admissionDate);

    postRegistrationMutate({
      id: uuidv4(),
      employeeName: name,
      email,
      cpf,
      admissionDate: format(admissionDateUTC, "dd/MM/yyyy"),
      status: Status.REVIEW,
    });
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Nome"
            label="Nome"
            error={errors.name?.message}
            {...register("name")}
          />
          <TextField
            placeholder="Email"
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <TextField
            placeholder="CPF"
            label="CPF"
            error={errors.cpf?.message}
            {...register("cpf")}
          />
          <TextField
            label="Data de admissão"
            type="date"
            error={errors.admissionDate?.message}
            {...register("admissionDate")}
          />
          <Button type="submit">Cadastrar</Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};
