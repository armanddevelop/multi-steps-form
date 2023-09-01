import { useContext } from "react";
import { ContextApp } from "../../Context/ContextApp";
import { ContextTypeApp } from "../../@types/@types.stepsForm";
import { Steps } from "../Steps/StepsComponent";

export const Aside = (): JSX.Element => {
  const {
    dataContext: { stepsSide },
  } = useContext(ContextApp) || ({} as ContextTypeApp);
  return (
    <aside className="aside-steps">
      <ul>
        {stepsSide.map((step, idx) => (
          <Steps
            className="step"
            key={idx}
            content={step}
            stepNumber={`STEP ${idx + 1}`}
            idx={idx}
          />
        ))}
      </ul>
    </aside>
  );
};
