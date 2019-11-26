import React, { FC, useState } from "react";

import { CameraResultType, Plugins } from "@capacitor/core";
import { IonButton } from "@ionic/react";

import Page from "../../Components/Page";

interface Props {}

const Camera: FC<Props> = () => {
  const { Camera } = Plugins;
  const [image, setImage] = useState<any>(null);

  return (
    <Page title="Camera Demo">
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
      {image && (
        <img alt="i" src={`data:image/jpeg;charset=utf-8;base64,${image}`} />
      )}
    </Page>
  );
};

export default Camera;
