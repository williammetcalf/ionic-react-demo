import React, { FC } from "react";

import { IonInput, IonItem, IonLabel } from "@ionic/react";

import { MyForm } from "./useFormState";

interface Props {
  value: MyForm;
  onKeyChange: (key: keyof MyForm, value: string) => any;
}

const Form: FC<Props> = props => {
  const { value, onKeyChange } = props;
  return (
    <form>
      <IonItem>
        <IonLabel position="floating">f1</IonLabel>
        <IonInput
          value={value.f1}
          onIonChange={e => onKeyChange("f1", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f2</IonLabel>
        <IonInput
          value={value.f2}
          onIonChange={e => onKeyChange("f2", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f3</IonLabel>
        <IonInput
          value={value.f3}
          onIonChange={e => onKeyChange("f3", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f4</IonLabel>
        <IonInput
          value={value.f4}
          onIonChange={e => onKeyChange("f4", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f5</IonLabel>
        <IonInput
          value={value.f5}
          onIonChange={e => onKeyChange("f5", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f6</IonLabel>
        <IonInput
          value={value.f6}
          onIonChange={e => onKeyChange("f6", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f7</IonLabel>
        <IonInput
          value={value.f7}
          onIonChange={e => onKeyChange("f7", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f8</IonLabel>
        <IonInput
          value={value.f8}
          onIonChange={e => onKeyChange("f8", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f9</IonLabel>
        <IonInput
          value={value.f9}
          onIonChange={e => onKeyChange("f9", e.detail.value as string)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">f10</IonLabel>
        <IonInput
          value={value.f10}
          onIonChange={e => onKeyChange("f10", e.detail.value as string)}
        />
      </IonItem>
    </form>
  );
};

export default Form;
