import React, { FC } from "react";

import { IonContent, IonPage } from "@ionic/react";

import Header from "./Header";

interface Props {
  title?: string;
}

const Page: FC<Props> = props => {
  const { children, title } = props;

  return (
    <IonPage>
      <Header title={title} />
      <IonContent className="ion-padding">
        {title && <h1>{title}</h1>}
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
