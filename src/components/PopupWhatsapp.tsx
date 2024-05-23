import React from 'react';

export function Popup() {
    return (
        <div className="popup bg-jogga-white w-[550px] h-[350px]">
            <div className="popup-content w-[385px] h-[54px] flex flex-col justify-center items-center">
                <h2 className="text-lg font-semibold mb-2 text-[20px] text-jogga-gray-text-popup">
                    Fale conosco pelo Whatsapp
                </h2>
                <p className="text-sm mb-6 text-[14px] font-light text-jogga-gray-text-popup">
                    Informe o número de telefone para continuar</p>
                <form className="mt-24">
                    <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder='Telefone'
                    className="w-[385px] h-[44px] border border-gray-darker mb-4 placeholder-jogga-gray-popup-place-holder text-jogga-gray-popup-input" />
                    <button 
                    type="submit"
                    className="w-[385px] h-[44px] rounded-md bg-Jogga-green-popup text-jogga-white">
                        Fale Conosco
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
