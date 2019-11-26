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
import "../theme/variables.css";

import React, { FC, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { SplashScreen } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import useIsDesktop from "../Components/use-is-desktop";
import Camera from "../pages/Camera";
import Form from "../pages/Form";
import Home from "../pages/Home";
import DesktopNavigation from "./DesktopNavigation";
import TabNavigation from "./TabNavigation";

const App: FC = () => {
  const isDesktop = useIsDesktop();
  const NavComponent = isDesktop ? DesktopNavigation : TabNavigation;
  useEffect(() => {
    defineCustomElements(window);
    SplashScreen.hide();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <NavComponent>
          <Route path="/home" component={Home} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/cam" component={Camera} exact />
        </NavComponent>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
