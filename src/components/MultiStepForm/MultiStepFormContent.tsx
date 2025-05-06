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
    <div className="flex flex-col basis-3/4">
      <div className="p-4 flex-1 relative">
        <div className="shadow-lg -mt-18 p-5 bg-white rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-primary-marine-blue">
              Personal info
            </h3>
            <p className="text-neutral-cool-gray text-sm">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm text-primary-marine-blue"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                  name="name"
                  type="text"
                  placeholder="e.g. Stephen King"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm text-primary-marine-blue"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                  name="email"
                  type="text"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm text-primary-marine-blue"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="border border-neutral-light-gray rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-purplish-blue transition-all duration-300"
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white p-4 mt-auto flex">
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
