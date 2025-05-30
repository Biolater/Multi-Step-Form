import { createContext, useContext, useEffect, useState } from "react";

interface FormContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  name: string;
  handleSetName: (name: string) => void;
  email: string;
  handleSetEmail: (email: string) => void;
  phoneNumber: string;
  handleSetPhoneNumber: (phoneNumber: string) => void;
  plan: "Arcade" | "Advanced" | "Pro" | null;
  handleSetPlan: (plan: "Arcade" | "Advanced" | "Pro") => void;
  billingPeriod: "monthly" | "yearly";
  handleSetBillingPeriod: (period: "monthly" | "yearly") => void;
  total: number;
  handleSetTotal: (total: number) => void;
  addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
  handleSetAddons: (addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }) => void;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plan, setPlan] = useState<"Arcade" | "Advanced" | "Pro" | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [total, setTotal] = useState(0);
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
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

  const handleSetTotal = (total: number) => {
    setTotal((prev) => prev + total);
  };

  const handleSetAddons = (addons: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }) => {
    setAddons(addons);
  };

  useEffect(() => {
    console.log({
      name,
      email,
      phoneNumber,
      plan,
      billingPeriod,
      addons,
      total,
    });
  }, [name, email, phoneNumber, plan, billingPeriod, addons, total]);

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
        total,
        handleSetTotal,
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
