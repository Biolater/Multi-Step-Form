import { useState } from "react";
import MultiStepFormImage from "./MultiStepFormImage";
import MultiStepFormContent from "./MultiStepFormContent";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleGoBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <MultiStepFormImage currentStep={currentStep} />
      <MultiStepFormContent
        currentStep={currentStep}
        handleGoBack={handleGoBack}
        handleNext={handleNext}
      />
    </div>
  );
};

export default MultiStepForm;
