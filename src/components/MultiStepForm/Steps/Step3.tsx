import Button from "../../common/Button";
import { FormEvent } from "react";
import StepHeader from "../../common/StepHeader";
import { useFormContext } from "../FormContext";
import AddOnItem from "../AddOnItem";

const OPTIONS = [
  {
    title: "Online Service",
    description: "Access to multiplayer games",
    priceLabel: "+$1/mo",
    priceValue: 1,
    yearlyPriceValue: 10,
    yearlyPriceLabel: "+$10/yr",
    accessKey: "onlineService",
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    priceLabel: "+$2/mo",
    priceValue: 2,
    yearlyPriceValue: 20,
    yearlyPriceLabel: "+$20/yr",
    accessKey: "largerStorage",
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    priceLabel: "+$2/mo",
    priceValue: 2,
    yearlyPriceValue: 20,
    yearlyPriceLabel: "+$20/yr",
    accessKey: "customizableProfile",
  },
];

interface Step3Props {
  handleGoBack: () => void;
  handleNext: () => void;
}

const Step3 = ({ handleGoBack, handleNext }: Step3Props) => {
  const { handleSetTotal, billingPeriod, addons, handleSetAddons } =
    useFormContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const total = OPTIONS.reduce((acc, option) => {
      if (addons[option.accessKey as keyof typeof addons]) {
        return (
          acc +
          (billingPeriod === "monthly"
            ? option.priceValue
            : option.yearlyPriceValue)
        );
      }
      return acc;
    }, 0);
    handleSetTotal(total);
    handleNext();
  };

  return (
    <div className="flex-1 relative">
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 md:p-0 bg-white rounded-lg flex flex-col gap-4">
        <StepHeader
          title="Select your plan"
          description="You have the option of monthly or annual billing. Annual billing"
        />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {OPTIONS.map((option) => (
              <AddOnItem
                key={option.title}
                title={option.title}
                description={option.description}
                priceLabel={option.priceLabel}
                priceValue={option.priceValue}
                yearlyPriceLabel={option.yearlyPriceLabel}
                yearlyPriceValue={option.yearlyPriceValue}
                isSelected={!!addons[option.accessKey as keyof typeof addons]}
                onClick={() => {
                  const key = option.accessKey as keyof typeof addons;
                  handleSetAddons({
                    ...addons,
                    [key]: !addons[key],
                  });
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button type="button" variant="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button type="submit" variant="primary" className="ms-auto">
              Next Step
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
