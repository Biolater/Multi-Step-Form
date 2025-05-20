import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";

import PlanOptionItem from "../PlanOptionItem";
import Button from "../../common/Button";
import { FormEvent, useState } from "react";
import StepHeader from "../../common/StepHeader";
import { useFormContext } from "../FormContext";
import MonthlyOrYearlySwitch from "../../common/MonthlyOrYearlySwitch";

const OPTIONS = [
  {
    title: "Arcade",
    priceLabel: "$9/mo",
    priceValue: 9,
    icon: ArcadeIcon,
    yearlyPriceValue: 90,
    yearlyPriceLabel: "$90/yr",
  },
  {
    title: "Advanced",
    priceLabel: "$12/mo",
    priceValue: 12,
    icon: AdvancedIcon,
    yearlyPriceValue: 120,
    yearlyPriceLabel: "$120/yr",
  },
  {
    title: "Pro",
    priceLabel: "$15/mo",
    priceValue: 15,
    icon: ProIcon,
    yearlyPriceValue: 150,
    yearlyPriceLabel: "$150/yr",
  },
];

interface Step2Props {
  handleGoBack: () => void;
  handleNext: () => void;
}

const Step2 = ({ handleGoBack, handleNext }: Step2Props) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const {
    handleSetPlan,
    handleSetBillingPeriod,
    handleSetTotal,
    billingPeriod,
  } = useFormContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Validate selection before proceeding
    if (selectedPlan) {
      const price = OPTIONS.find(
        (option) => option.title === selectedPlan
      )?.priceValue;
      if (!price) {
        alert("Please select a plan");
        return;
      }
      const total = price * (billingPeriod === "monthly" ? 1 : 12);
      handleSetPlan(selectedPlan as "Arcade" | "Advanced" | "Pro");
      handleSetBillingPeriod(billingPeriod as "monthly" | "yearly");
      handleSetTotal(total);
      handleNext();
    } else {
      alert("Please select a plan");
    }
  };

  const handlePlanSelect = (title: string) => {
    setSelectedPlan((prev) => (prev === title ? null : title));
  };

  return (
    <div className="flex-1 relative">
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 md:p-0 bg-white rounded-lg flex flex-col gap-4">
        <StepHeader
          title="Select your plan"
          description="You have the option of monthly or annual billing. Annual billing"
        />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 md:flex-row">
            {OPTIONS.map((option) => (
              <PlanOptionItem
                key={option.title}
                title={option.title}
                priceLabel={option.priceLabel}
                priceValue={option.priceValue}
                yearlyPriceLabel={option.yearlyPriceLabel}
                yearlyPriceValue={option.yearlyPriceValue}
                icon={option.icon}
                isSelected={selectedPlan === option.title}
                onClick={() => handlePlanSelect(option.title)}
              />
            ))}
          </div>
          <MonthlyOrYearlySwitch />
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

export default Step2;
