import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

interface MultiStepFormContentProps {
  currentStep: number;
  handleGoBack: () => void;
  handleNext: () => void;
}

const MultiStepFormContent = ({
  currentStep,
  handleGoBack,
  handleNext,
}: MultiStepFormContentProps) => {
  return (
    <div className="flex flex-col basis-3/4 md:basis-[70%] md:justify-center">
      <div className="bg-white p-4 md:px-20 md:bg-transparent md:overflow-y-auto">
        {currentStep === 1 && <Step1 handleNext={handleNext} />}
        {currentStep === 2 && (
          <Step2 handleGoBack={handleGoBack} handleNext={handleNext} />
        )}
        {currentStep === 3 && (
          <Step3 handleGoBack={handleGoBack} handleNext={handleNext} />
        )}
      </div>
    </div>
  );
};

export default MultiStepFormContent;
