import { ButtonContact } from "./elements/ButtonContact";
// import {isValidEmail, isValidPhone} from "../utils/InputValidation";

// const [emailError, setEmailError] = useState<string | null>(null);
//   const [phoneError, setPhoneError] = useState<string | null>(null);

//   const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
//     const email = event.target.value;
//     if (!isValidEmail(email)) {
//       setEmailError("Por favor, insira um e-mail válido.");
//     } else {
//       setEmailError(null);
//     }
//   };

//   const handlePhoneBlur = (event: React.FocusEvent<HTMLInputElement>) => {
//     const phone = event.target.value;
//     if (!isValidPhone(phone)) {
//       setPhoneError("Por favor, insira telefone válido.");
//     } else {
//       setPhoneError(null);
//     }
//   };

export function Form() {
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
            className="block w-full h-[56px] px-4 rounded-md"
            required
            /*onBlur={handleEmailBlur}*/ 
            />
            {/* {emailError && <p className="text-red-500 text-[12px]">{emailError}</p>} */}
          </div>
          
          <div className="lg:w-1/2">
            <label htmlFor="telefone" className="text-jogga-white font-notosans text-[12px]">
            Telefone
            </label>
            <input
            type="tel"
            id="telefone"
            name="telefone"
            className="block w-full h-[56px] px-4 rounded-md"
            required
            /*onBlur={handlePhoneBlur}*/
            />
            {/* {phoneError && <p className="text-red-500 text-[12px]">{phoneError}</p>} */}
          </div>
        </div>
        
        <div className="mt-9 lg:mt-0">
          <ButtonContact />
        </div>
      </form>
    </div>
  );
}
