'use client'

import React from 'react';

interface PopupWhatsappProps {
    onClose: () => void;
}

function PopupWhatsapp({ onClose }: PopupWhatsappProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-96 h-72 rounded-lg p-6 flex flex-col items-center relative">
                <h2 className="text-lg font-semibold mb-2 mt-6 text-gray-700">
                    Fale conosco pelo Whatsapp
                </h2>
                <p className="text-sm mb-6 text-gray-600">
                    Informe o número de telefone para continuar
                </p>
                <form className="w-full">
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        placeholder="Telefone"
                        className="w-full h-10 border border-gray-300 mt-6 rounded px-3 focus:outline-none focus:ring focus:border-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full h-10 bg-jogga-green-popup mt-[16px] text-jogga-white rounded"
                    >
                        Fale Conosco
                    </button>
                </form>
                <button onClick={onClose} className="absolute top-2 right-2 text-jogga-gray-text-popup hover:text-jogga-gray focus:outline-none">
                    X
                </button>
            </div>
        </div>
    );
}

export default PopupWhatsapp;
