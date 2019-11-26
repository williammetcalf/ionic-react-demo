import React, { FC } from "react";
import { useLocation } from "react-router";

import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface Props {}

const Header: FC<Props> = () => {
  const { pathname } = useLocation();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pathname}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
