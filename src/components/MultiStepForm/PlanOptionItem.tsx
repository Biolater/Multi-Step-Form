import { FC } from "react";
import { useFormContext } from "./FormContext";

interface PlanOptionItemProps {
  title: string;
  priceLabel: string;
  priceValue: number;
  yearlyPriceLabel: string;
  yearlyPriceValue: number;
  isSelected: boolean;
  icon: string;
  onClick?: () => void;
}

const PlanOptionItem: FC<PlanOptionItemProps> = ({
  title,
  priceLabel,
  priceValue,
  yearlyPriceLabel,
  yearlyPriceValue,
  isSelected,
  icon,
  onClick,
}) => {
  const { billingPeriod } = useFormContext();

  const correctPriceLabel =
    billingPeriod === "monthly" ? priceLabel : yearlyPriceLabel;

  return (
    <div
      className={`p-4 transition-all cursor-pointer border ${
        isSelected
          ? "border-primary-purplish-blue bg-neutral-alabaster"
          : "border-neutral-light-gray"
      } flex items-center gap-4 md:gap-8 rounded-lg md:w-1/3 md:flex-col md:items-start`}
      onClick={onClick}
    >
      <div className="size-10 flex items-center justify-center">
        <img className="size-full" src={icon} alt={title} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-primary-marine-blue font-bold">{title}</h3>
        <p className="text-neutral-cool-gray">{correctPriceLabel}</p>
        {billingPeriod === "yearly" && (
          <p className="text-primary-marine-blue text-sm font-semibold">2 months free</p>
        )}
      </div>
    </div>
  );
};

export default PlanOptionItem;
