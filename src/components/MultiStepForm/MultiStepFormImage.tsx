interface MultiStepFormImageProps {
  currentStep: number;
}

const MultiStepFormImage = ({ currentStep }: MultiStepFormImageProps) => {
  return (
    <div className="basis-1/4 flex-1 relative">
      <div className="absolute flex items-center gap-4 left-1/2 -translate-x-1/2 top-6 transform">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={`size-8 border border-neutral-light-gray font-bold flex items-center justify-center rounded-full ${
              index + 1 <= currentStep
                ? "bg-primary-light-blue text-primary-marine-blue transition-colors duration-300"
                : "bg-transparent text-white transition-colors duration-300"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="h-full w-full bg-cover bg-center bg-[url('/src/assets/images/bg-sidebar-mobile.svg')]"></div>
    </div>
  );
};

export default MultiStepFormImage;
