import { type LiHTMLAttributes } from "react";
import { useControlStep } from "../../Hooks/useControlStep";

interface IStepsProps extends LiHTMLAttributes<HTMLLIElement> {
  content?: string;
  idx?: number;
  stepNumber: string;
}

export const Steps = (props: IStepsProps): JSX.Element => {
  const { content, stepNumber, idx, ...rest } = props;
  const { isStepSelected } = useControlStep(idx);
  const className = isStepSelected ? "step__dot-current" : "step__dot";
  return (
    <li {...rest}>
      <p className={className}>{idx !== undefined && idx + 1}</p>
      <p className="step__step-number">
        {stepNumber}
        <br />
        <span className="content-step">{content}</span>
      </p>
    </li>
  );
};
