import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  // Billing Details
  name: string;
  email: string;
  phone: string;
  // Shipping Info
  address: string;
  zipCode: string;
  city: string;
  country: string;
  // Payment Details
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

const CheckoutContext = React.createContext({});

function CheckoutProvider() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const value = {
    register,
    setValue,
    handleSubmit,
    errors,
  };

  return <CheckoutContext.Provider value={value} />;
}

function useCheckout() {
  const context = React.useContext(CheckoutContext);
  if (!context) {
    throw new Error(
      "This component does not nest in Checkout Context Provider"
    );
  }

  return context;
}

export { CheckoutProvider, useCheckout };
