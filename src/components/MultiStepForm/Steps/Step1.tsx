import { useFormContext } from "../FormContext";
import { useState } from "react";
import step1Schema from "../../../schemas/step1.schema";
interface Step1Props {
  handleNext: () => void;
}

const Step1 = ({ handleNext }: Step1Props) => {
  const {
    handleSetName,
    handleSetEmail,
    handleSetPhoneNumber,
    setCurrentStep,
    email,
    phoneNumber,
    name,
  } = useFormContext();
  const [errors, setErrors] = useState<{
    name?: string[];
    email?: string[];
    phone?: string[];
  }>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form inputs here
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const result = step1Schema.safeParse({ name, email, phone });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    // Clear errors on success
    setErrors({});

    handleSetName(name as string);
    handleSetEmail(email as string);
    handleSetPhoneNumber(phone as string);

    handleNext();
    setCurrentStep(2);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSetPhoneNumber(e.target.value);
  };

  return (
    <div className="flex-1 relative">
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 bg-white rounded-lg flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-primary-marine-blue">
            Personal info
          </h3>
          <p className="text-neutral-cool-gray text-sm">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="e.g. Stephen King"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>
              )}
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
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
              )}
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
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="tel"
                placeholder="Phone Number"
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone[0]}</p>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="p-2 ms-auto bg-primary-purplish-blue text-white rounded-md"
              >
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
