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
        <IonLabel position="floating">text</IonLabel>
        <IonInput
          value={value.f1}
          onIonChange={e => onKeyChange("f1", e.detail.value as string)}
          type="text"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">number</IonLabel>
        <IonInput
          value={value.f2}
          onIonChange={e => onKeyChange("f2", e.detail.value as string)}
          type="number"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">email</IonLabel>
        <IonInput
          value={value.f3}
          onIonChange={e => onKeyChange("f3", e.detail.value as string)}
          type="email"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">password</IonLabel>
        <IonInput
          value={value.f4}
          onIonChange={e => onKeyChange("f4", e.detail.value as string)}
          type="password"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">tel</IonLabel>
        <IonInput
          value={value.f5}
          onIonChange={e => onKeyChange("f5", e.detail.value as string)}
          type="tel"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">time</IonLabel>
        <IonInput
          value={value.f6}
          onIonChange={e => onKeyChange("f6", e.detail.value as string)}
          type="time"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">search</IonLabel>
        <IonInput
          value={value.f7}
          onIonChange={e => onKeyChange("f7", e.detail.value as string)}
          type="search"
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">url</IonLabel>
        <IonInput
          value={value.f8}
          onIonChange={e => onKeyChange("f8", e.detail.value as string)}
          type="url"
        />
      </IonItem>
    </form>
  );
};

export default Form;
