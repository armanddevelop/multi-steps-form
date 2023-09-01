import { useEffect, useState } from "react";

export const useControlStep = (idx: number = 0) => {
  const [isStepSelected, setIsStepSelected] = useState<boolean>(false);
  useEffect(() => {
    if (idx === 0) setIsStepSelected(true);
  }, [idx]);

  return { isStepSelected, setIsStepSelected };
};
