import { FC } from "react";
import Checkbox from "../common/Checkbox";
import { useFormContext } from "./FormContext";

interface AddOnItemProps {
  title: string;
  description: string;
  priceLabel: string;
  priceValue: number;
  yearlyPriceLabel: string;
  yearlyPriceValue: number;
  isSelected: boolean;
  onClick?: () => void;
}

const AddOnItem: FC<AddOnItemProps> = ({
  title,
  description,
  priceLabel,
  priceValue,
  yearlyPriceLabel,
  yearlyPriceValue,
  isSelected,
  onClick,
}) => {
  const { billingPeriod } = useFormContext();

  const correctPriceLabel =
    billingPeriod === "monthly" ? priceLabel : yearlyPriceLabel;



  return (
    <div
      className={`p-4 border rounded-lg flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 hover:border-primary-purplish-blue ${
        isSelected
          ? "border-primary-purplish-blue bg-neutral-alabaster"
          : "border-neutral-light-gray"
      }`}
      onClick={() => onClick && onClick()}
    >
      <div className="flex items-center gap-4">
        <Checkbox checked={isSelected} />
        <div>
          <h3 className="font-medium text-primary-marine-blue">{title}</h3>
          <p className="text-sm text-neutral-cool-gray">{description}</p>
        </div>
      </div>
      <p className="text-primary-purplish-blue text-sm">{correctPriceLabel}</p>
    </div>
  );
};

export default AddOnItem;
