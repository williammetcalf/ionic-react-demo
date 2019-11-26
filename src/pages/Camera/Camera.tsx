import React, { FC, useEffect, useState } from "react";

import { CameraResultType, Plugins } from "@capacitor/core";
import { IonButton, IonContent, IonPage } from "@ionic/react";

import Header from "../../Components/Header";

interface Props {}

const Camera: FC<Props> = () => {
  const { Camera } = Plugins;
  const [image, setImage] = useState<any>(null);

  return (
    <IonPage>
      <Header />
      <IonButton
        onClick={() => {
          Camera.getPhoto({
            resultType: CameraResultType.Base64
          }).then(({ base64String }) => {
            setImage(base64String);
          });
        }}
      >
        Take Picture
      </IonButton>
      <IonContent>
        {image && <img src={`data:image/jpeg;charset=utf-8;base64,${image}`} />}
      </IonContent>
    </IonPage>
  );
};

export default Camera;
