import { FC } from "react";

interface PlanOptionItemProps {
  title: string;
  price: string;
  isSelected: boolean;
  icon: string;
}

const PlanOptionItem: FC<PlanOptionItemProps> = ({
  title,
  price,
  isSelected,
  icon,
}) => {
  return (
    <div className="p-4 cursor-pointer border border-neutral-light-gray flex items-center gap-4 rounded-lg">
      <div className="size-10 flex items-center justify-center">
        <img className="size-full" src={icon} alt={title} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-primary-marine-blue font-bold">{title}</h3>
        <p className="text-neutral-cool-gray">{price}</p>
      </div>
    </div>
  );
};

export default PlanOptionItem;
