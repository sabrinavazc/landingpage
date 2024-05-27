'use client'

import { ButtonContact } from "./elements/ButtonContact";
import { isValidEmail, isValidPhone } from "../utils/InputValidation";
import { useState } from "react";

type ValidationError = string | null;

function useFormInputValidation(initialValue: string, validationFn: (value: string) => boolean): [string, ValidationError, (value: string) => void, (event: React.FocusEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<ValidationError>(null);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!validationFn(inputValue)) {
      setError("Por favor, insira um valor válido.");
    } else {
      setError(null);
    }
  };

  return [value, error, handleChange, handleBlur];
}

export function Form() {
  const [name, setName] = useState<string>('');
  const [email, emailError, setEmail, handleEmailBlur] = useFormInputValidation('', isValidEmail);
  const [phone, phoneError, setPhone, handlePhoneBlur] = useFormInputValidation('', isValidPhone);

  return (
    <div>
      <h2 className="text-jogga-white text-[32px] font-bold">Fill the form to get in touch</h2>
      
      <form className="mt-[20px] space-y-4">
        <div>
          <label htmlFor="name" className="text-jogga-white font-notosans text-[12px]">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full h-[56px] px-4 rounded-md"
            required
          />
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="lg:w-1/2">
            <label htmlFor="email" className="text-jogga-white font-notosans text-[12px]">
              E-mail
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={email}
              className="block w-full h-[56px] px-4 rounded-md"
              onChange={(event) => setEmail(event.target.value)}
              onBlur={handleEmailBlur}
              required
              
            />
            {emailError && <p className="text-jogga-blue text-[12px]">{emailError}</p>}
          </div>
          
          <div className="lg:w-1/2">
            <label htmlFor="telefone" className="text-jogga-white font-notosans text-[12px]">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={phone}
              className="block w-full h-[56px] px-4 rounded-md"
              required
              onChange={(event) => setPhone(event.target.value)}
              onBlur={handlePhoneBlur}
              pattern="[0-9]*"
            />
            {phoneError && <p className="text-jogga-blue text-[12px]">{phoneError}</p>}
          </div>
        </div>
        
        <div className="mt-9 lg:mt-0">
          <ButtonContact />
        </div>
      </form>
    </div>
  );
}
