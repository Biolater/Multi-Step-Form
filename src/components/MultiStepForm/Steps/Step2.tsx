import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import PlanOptionItem from "../PlanOptionItem";
import { FormEvent, useState } from "react";

const OPTIONS = [
  {
    title: "Arcade",
    price: "$9/mo",
    icon: ArcadeIcon,
  },
];

interface Step2Props {
  handleGoBack: () => void;
  handleNext: () => void;
}

const Step2 = ({ handleGoBack, handleNext }: Step2Props) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Validate selection before proceeding
    if (selectedPlan) {
      handleNext();
    }
  };

  const handlePlanSelect = (title: string) => {
    setSelectedPlan(title);
  };

  return (
    <div className="flex-1 relative">
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 bg-white rounded-lg flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-primary-marine-blue">
            Select your plan
          </h3>
          <p className="text-neutral-cool-gray text-sm">
            You have the option of monthly or annual billing. Annual billing
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {OPTIONS.map((option) => (
              <PlanOptionItem
                key={option.title}
                title={option.title}
                price={option.price}
                icon={option.icon}
                isSelected={selectedPlan === option.title}
                onClick={() => handlePlanSelect(option.title)}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleGoBack}
              className="p-2 bg-transparent text-neutral-cool-gray hover:text-primary-marine-blue rounded-md"
            >
              Go Back
            </button>
            <button
              type="submit"
              className="p-2 ms-auto bg-primary-purplish-blue text-white rounded-md"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
