import React from "react";

import { getPlatforms } from "@ionic/core";
import { IonText } from "@ionic/react";

import Page from "../../Components/Page";

const Home: React.FC = () => {
  const platforms = getPlatforms(window);

  return (
    <Page title="Home">
      <IonText>Current Device: {platforms.join(", ")}</IonText>
    </Page>
  );
};

export default Home;
