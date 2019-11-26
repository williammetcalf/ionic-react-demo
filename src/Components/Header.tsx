import React, { FC } from "react";
import { useLocation } from "react-router";

import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface Props {
  title?: string;
}

const Header: FC<Props> = props => {
  const { title } = props;
  const { pathname } = useLocation();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title || pathname}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
