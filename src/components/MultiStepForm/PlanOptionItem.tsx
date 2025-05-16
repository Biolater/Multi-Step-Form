import { FC } from "react";

interface PlanOptionItemProps {
  title: string;
  price: string;
  isSelected: boolean;
  icon: string;
  onClick?: () => void;
}

const PlanOptionItem: FC<PlanOptionItemProps> = ({
  title,
  price,
  isSelected,
  icon,
  onClick,
}) => {
  return (
    <div 
      className={`p-4 cursor-pointer border ${isSelected ? 'border-primary-purplish-blue bg-neutral-alabaster' : 'border-neutral-light-gray'} flex items-center gap-4 rounded-lg`}
      onClick={onClick}
    >
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
