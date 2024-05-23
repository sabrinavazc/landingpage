import Image from "../../../node_modules/next/image";
import Arrow from '../../assets/arrow.png';


export function ButtonContact() {
  return (
    <button className="flex items-center justify-center gap-2 bg-jogga-light-blue text-jogga-white font-regular w-[253px] h-[63px] rounded-md">
      <span>Entrar em contato</span>
      <Image 
      src={Arrow}
      alt="Arrow"
      />
    </button>
  );
}