import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

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
  const showGoBackButton = currentStep > 1;
  const showNextButton = currentStep < 4;
  return (
    <div className="flex flex-col basis-3/4 md:justify-center">
      <div className="bg-white p-4">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        <div className="md:flex justify-end hidden mt-4">
          {showGoBackButton && (
            <button
              onClick={handleGoBack}
              className="p-2 bg-primary-purplish-blue text-white rounded-md"
            >
              Go Back
            </button>
          )}
          {showNextButton && (
            <button
              onClick={handleNext}
              className="p-2 ms-auto bg-primary-purplish-blue text-white rounded-md"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
      <div className="bg-white p-4 mt-auto flex md:hidden">
        {showGoBackButton && (
          <button
            onClick={handleGoBack}
            className="p-2 bg-primary-purplish-blue text-white rounded-md"
          >
            Go Back
          </button>
        )}
        {showNextButton && (
          <button
            onClick={handleNext}
            className="p-2 ms-auto bg-primary-purplish-blue text-white rounded-md"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepFormContent;