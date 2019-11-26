import React, { FC } from "react";
import { useLocation } from "react-router";

import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import useIsDesktop from "./use-is-desktop";

interface Props {
  title?: string;
}

const Header: FC<Props> = props => {
  const { title } = props;
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title || pathname}</IonTitle>
          {!isDesktop && (
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
