import { Input } from "./styles";
import { TextFieldProps } from "./types";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  id,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input {...props} />
      <span style={{ fontSize: 12, color: "red" }}>{error}</span>
    </div>
  );
};
