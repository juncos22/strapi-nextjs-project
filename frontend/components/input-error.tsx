import React from "react";
import { FieldError } from "./ui/field";

interface Props {
  errors?: string[];
}

const InputError: React.FC<Props> = ({ errors }) => {
  if (!errors) return null;
  return errors?.map((error, i) => <FieldError key={i}>{error}</FieldError>);
};

export default InputError;
