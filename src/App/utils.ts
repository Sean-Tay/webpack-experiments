import React from "react";

export const useLatestEffect = (
  effectFunction = async () => {
    return;
  },
  effectStateUpdateFunction = (data) => {
    return;
  },
  effectDependencyArray: any[] = []
) => {
  const rEffectID = React.useRef(0);

  React.useEffect(() => {
    rEffectID.current += 1;
    const currentEffectID = rEffectID.current;

    effectFunction().then((data: any) => {
      if (currentEffectID === rEffectID.current) {
        effectStateUpdateFunction(data);
      }
    });
  }, [...effectDependencyArray]);
};

export default useLatestEffect;
