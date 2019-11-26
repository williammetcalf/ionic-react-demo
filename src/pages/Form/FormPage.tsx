import React from "react";

import Page from "../../Components/Page";
import Form from "./Form";
import useFormState, { MyForm } from "./useFormState";

const FormPage: React.FC = () => {
  const [value, dispatch] = useFormState();

  return (
    <Page title="Form Demo">
      <Form
        value={value}
        onKeyChange={(key: keyof MyForm, value: string) =>
          dispatch({ key, value })
        }
      />
    </Page>
  );
};

export default FormPage;
