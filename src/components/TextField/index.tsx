import { ForwardedRef, forwardRef } from "react";
import { Input } from "./styles";
import { TextFieldProps } from "./types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, error, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <Input id={id} ref={ref} {...rest} />
        {error && <span style={{ fontSize: 12, color: "red" }}>{error}</span>}
      </div>
    );
  }
);
