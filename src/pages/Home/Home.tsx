import React, { useCallback, useMemo } from "react";
import { useLocation } from "react-router";

import { getPlatforms } from "@ionic/core";
import {
    IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from "@ionic/react";

import Form from "./Form";
import useFormState, { MyForm } from "./useFormState";

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const platforms = useMemo(() => getPlatforms(window), []);
  const [value, dispatch] = useFormState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pathname}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
