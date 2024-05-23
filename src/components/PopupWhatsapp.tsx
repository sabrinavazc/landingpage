import React from 'react';

export function Popup() {
    return (
        <div className="popup bg-jogga-white w-[550px] h-[350px]">
            <div className="popup-content w-[385px] h-[54px] flex flex-col justify-center items-center">
                <h2 className="text-gray text-lg font-semibold mb-2">
                    Fale conosco pelo Whatsapp
                </h2>
                <p className="text-gray text-sm mb-6">
                    Informe o número de telefone para continuar</p>
                <form className="mt-24">
                    <input type="text" id="telefone" name="telefone" placeholder='Telefone' className="w-[385px] h-[44px] border border-gray-darker text-gray-600 placeholder-gray-700 mb-4" />
                    <button type="submit" className="w-[385px] h-[44px] rounded-md bg-Jogga-green-popup text-jogga-white">Fale Conosco</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
