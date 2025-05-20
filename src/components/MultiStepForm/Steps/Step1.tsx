import { useFormContext } from "../FormContext";
import { useState } from "react";
import step1Schema from "../../../schemas/step1.schema";
import FormInput from "../../common/FormInput";
import Button from "../../common/Button";
import StepHeader from "../../common/StepHeader";
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
      <div className="shadow-lg md:shadow-none -mt-18 md:m-0 p-5 md:p-0 bg-white rounded-lg flex flex-col gap-4">
        <StepHeader
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormInput
              label="Name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="e.g. Stephen King"
              error={errors.name ? errors.name[0] : undefined}
            />
            <FormInput
              label="Email Address"
              name="email"
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              error={errors.email ? errors.email[0] : undefined}
            />
            <FormInput
              label="Phone Number"
              name="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              type="tel"
              placeholder="e.g. +1 234 567 890"
              error={errors.phone ? errors.phone[0] : undefined}
            />
            <div className="flex justify-end mt-4">
              <Button type="submit" variant="primary" className="ms-auto">
                Next Step
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
