import React, { useMemo, useState } from "react";
import { useLocation } from "react-router";

import { getPlatforms } from "@ionic/core";
import {
    IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTextarea,
    IonTitle, IonToolbar
} from "@ionic/react";

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
        <p>{platforms.join(", ")}</p>
        {/* 
        <IonItem>
          <IonLabel position="floating">Floating Label</IonLabel>
          <IonTextarea
            autoGrow
            value={value}
            onIonChange={e => setValue(e.detail.value as string)}
          />
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
