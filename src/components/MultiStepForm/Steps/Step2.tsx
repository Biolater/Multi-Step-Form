import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import PlanOptionItem from "../PlanOptionItem";

const OPTIONS = [
  {
    title: "Arcade",
    price: "$9/mo",
    icon: ArcadeIcon,
  },
];

const Step2 = () => {
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
        <div className="flex flex-col gap-4">
          {OPTIONS.map((option) => (
            <PlanOptionItem
              key={option.title}
              title={option.title}
              price={option.price}
              icon={option.icon}
              isSelected={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;
