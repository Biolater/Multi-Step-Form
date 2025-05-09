import { createContext, useContext, useState } from "react";

interface FormContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  name: string;
  handleSetName: (name: string) => void;
  email: string;
  handleSetEmail: (email: string) => void;
  phoneNumber: string;
  handleSetPhoneNumber: (phoneNumber: string) => void;
  plan: "Arcade" | "Advanced" | "Pro";
  handleSetPlan: (plan: "Arcade" | "Advanced" | "Pro") => void;
  billingPeriod: "monthly" | "yearly";
  handleSetBillingPeriod: (period: "monthly" | "yearly") => void;
  addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;

    total: number;
  };
  handleSetAddons: (addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
    total: number;
  }) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plan, setPlan] = useState<"Arcade" | "Advanced" | "Pro">("Arcade");
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    total: 0,
  });

  const handleSetPlan = (plan: "Arcade" | "Advanced" | "Pro") => {
    setPlan(plan);
  };

  const handleSetBillingPeriod = (period: "monthly" | "yearly") => {
    setBillingPeriod(period);
  };

  const handleSetName = (name: string) => {
    setName(name);
  };

  const handleSetEmail = (email: string) => {
    setEmail(email);
  };

  const handleSetPhoneNumber = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
  };

  const handleSetAddons = (addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
    total: number;
  }) => {
    setAddons(addons);
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        name,
        handleSetName,
        email,
        handleSetEmail,
        phoneNumber,
        handleSetPhoneNumber,
        plan,
        handleSetPlan,
        billingPeriod,
        handleSetBillingPeriod,
        addons,
        handleSetAddons,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
