import React, { FC } from "react";

import { IonRouterOutlet } from "@ionic/react";

const DesktopNavigation: FC = props => {
  const { children } = props;

  return <IonRouterOutlet>{children}</IonRouterOutlet>;
};

export default DesktopNavigation;
