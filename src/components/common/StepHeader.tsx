import { FC } from "react";

interface StepHeaderProps {
  title: string;
  description: string;
}

const StepHeader: FC<StepHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl md:text-2xl font-bold text-primary-marine-blue">
        {title}
      </h3>
      <p className="text-neutral-cool-gray text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default StepHeader;
