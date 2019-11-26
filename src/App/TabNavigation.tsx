import React, { FC } from "react";

import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";

interface Props {}

const TabNavigation: FC<Props> = props => {
  const { children } = props;

  return (
    <IonTabs>
      <IonRouterOutlet>{children}</IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="form" href="/form">
          <IonLabel>Form</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cam" href="/cam">
          <IonLabel>Cam</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabNavigation;
