import { useReducer } from "react";

export interface MyForm {
  f1?: string;
  f2?: string;
  f3?: string;
  f4?: string;
  f5?: string;
  f6?: string;
  f7?: string;
  f8?: string;
  f9?: string;
  f10?: string;
}

const useFormState = () => {
  return useReducer(reducer, {});
};

const reducer = (
  state: MyForm,
  action: { key: keyof MyForm; value: string }
) => {
  const { key, value } = action;
  return { ...state, [key]: value };
};

export default useFormState;
