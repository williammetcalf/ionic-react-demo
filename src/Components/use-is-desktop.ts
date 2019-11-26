import { useMemo } from "react";

import { getPlatforms } from "@ionic/react";

const useIsDesktop = () => {
  return useMemo(() => {
    const platforms = getPlatforms();
    return platforms.includes("desktop");
  }, []);
};

export default useIsDesktop;
