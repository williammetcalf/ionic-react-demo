import React from "react";

import { getPlatforms } from "@ionic/core";
import { IonContent, IonPage } from "@ionic/react";

import Header from "../../Components/Header";
import Form from "./Form";
import useFormState, { MyForm } from "./useFormState";

const Home: React.FC = () => {
  const platforms = getPlatforms(window);
  const [value, dispatch] = useFormState();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Header />
        <Form
          value={value}
          onKeyChange={(key: keyof MyForm, value: string) =>
            dispatch({ key, value })
          }
        />
        <p>{platforms.join(", ")}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
