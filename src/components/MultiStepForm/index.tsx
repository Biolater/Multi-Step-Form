import { useState } from "react";
import MultiStepFormImage from "./MultiStepFormImage";
import MultiStepFormContent from "./MultiStepFormContent";
import { FormProvider } from "./FormContext";

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
      <FormProvider>
        <MultiStepFormContent
          currentStep={currentStep}
          handleGoBack={handleGoBack}
          handleNext={handleNext}
        />
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
