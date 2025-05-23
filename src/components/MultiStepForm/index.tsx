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
    <div className="w-full md:h-screen md:flex md:items-center md:justify-center ">
      <div className="flex h-full md:rounded-xl bg-white md:max-w-4xl md:max-h-[90%] w-full flex-col md:flex-row">
        <MultiStepFormImage currentStep={currentStep} />
        <FormProvider>
          <MultiStepFormContent
            currentStep={currentStep}
            handleGoBack={handleGoBack}
            handleNext={handleNext}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default MultiStepForm;
