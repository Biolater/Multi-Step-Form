import { useState } from "react";
import { useFormContext } from "../MultiStepForm/FormContext";

const MonthlyOrYearlySwitch = () => {
  const { billingPeriod, handleSetBillingPeriod } = useFormContext();
  const [isYearly, setIsYearly] = useState(billingPeriod === "yearly");

  const handleToggle = () => {
    const newBillingType = isYearly ? "monthly" : "yearly";
    setIsYearly((prev) => !prev);
    handleSetBillingPeriod(newBillingType);
  };

  return (
    <div className="flex items-center justify-center gap-4 my-6 p-3 bg-neutral-alabaster rounded-lg">
      <span
        className={`font-medium ${
          !isYearly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
        }`}
      >
        Monthly
      </span>

      <button
        type="button"
        onClick={handleToggle}
        className="relative cursor-pointer inline-flex h-6 w-11 items-center rounded-full transition-colors bg-primary-marine-blue"
        role="switch"
        aria-checked={isYearly}
      >
        <span
          className={`inline-block size-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
            isYearly ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <span
        className={`font-medium ${
          isYearly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default MonthlyOrYearlySwitch;
