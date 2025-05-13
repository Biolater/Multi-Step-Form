import { stepInfo } from "../../constants";

interface MultiStepFormImageProps {
  currentStep: number;
}

const MultiStepFormImage = ({ currentStep }: MultiStepFormImageProps) => {
  return (
    <div className="basis-1/4 md:basis-3/12 flex-1 relative md:py-4 md:ps-4">
      <div className="absolute flex items-center md:flex-col gap-4 left-1/2 -translate-x-1/2 top-6 md:top-12 transform">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="md:flex items-center gap-2" key={index}>
            <div
              className={`size-8 border border-neutral-light-gray font-bold flex items-center justify-center rounded-full ${
                index + 1 <= currentStep
                  ? "bg-primary-light-blue text-primary-marine-blue transition-colors duration-300"
                  : "bg-transparent text-white transition-colors duration-300"
              }`}
            >
              {index + 1}
            </div>
            <div className="flex-col hidden md:flex">
              <h3 className="font-bold">Step {index + 1}</h3>
              <p className="text-white">{stepInfo[index].title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full md:rounded-lg w-full bg-cover bg-center bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] md:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')]"></div>
    </div>
  );
};

export default MultiStepFormImage;
