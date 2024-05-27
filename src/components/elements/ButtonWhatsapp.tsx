'use client';

import { useState } from 'react';
import Image from "../../../node_modules/next/image";
import Arrow from '../../assets/arrow.png';
import Popup from "../PopupWhatsapp";

export function ButtonWhatsapp() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleWhatsAppClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <button onClick={handleWhatsAppClick} className="flex items-center justify-center gap-2 bg-jogga-green text-jogga-white font-regular w-[232px] h-[60px] rounded-md">
        <span>Fale pelo Whatsapp</span>
        <Image 
          src={Arrow}
          alt="Arrow"
          width={20}
          height={20}
        />
      </button>
      {popupVisible && <Popup onClose={handleClosePopup} />}
    </div>
  );
}