/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
/* Theme variables */
import "./theme/variables.css";

import React, { FC, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import { SplashScreen } from "@capacitor/core";
import { getPlatforms } from "@ionic/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Camera from "./pages/Camera";
import Home from "./pages/Home";

const App: FC = () => {
  useEffect(() => {
    // if (getPlatforms(window).includes("desktop"))
    defineCustomElements(window);
    SplashScreen.hide();
    alert("Load");
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/t1" component={Home} exact />
            <Route path="/t2" component={Home} exact />
            <Route path="/t3" component={Home} exact />
            <Route path="/cam" component={Camera} exact />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="t1" href="/t1">
              <IonLabel>Tab One</IonLabel>
            </IonTabButton>
            <IonTabButton tab="t2" href="/t2">
              <IonLabel>Tab Two</IonLabel>
            </IonTabButton>
            <IonTabButton tab="t3" href="/t3">
              <IonLabel>Tab Three</IonLabel>
            </IonTabButton>
            <IonTabButton tab="cam" href="/cam">
              <IonLabel>Cam</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
