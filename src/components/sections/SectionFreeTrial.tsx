import { ButtonContact } from "../elements/ButtonContact";


export function SectionFreeTrial() {
    return (
        <section className="w-full h-[574px] bg-jogga-blue bg-no-repeat bg-center bg-cover relative">
            <div className="w-full mx-auto flex items-center justify-center">
                <div className="max-w-[1074px] w-full lg:px-0 lg:mx-auto mt-[140px] lg:mb-[32px] mb-4 sm:mb-6 md:mb-8">
                    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:px-0 px-8 h-full">
                        <div className="w-full lg:w-[1064px] relative lg:pl-12 lg:items-center lg:ml-0 lg:mr-12">
                            <div className="lg:ml-0 text-center lg:text-center">
                                <div className="max-w-[608px] h-262px mx-auto">
                                    <h1 className="text-jogga-white text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                                        Try Whitepace today
                                    </h1>
                                    <div className="text-jogga-white mt-24px text-18">
                                        <p className="block lg:mt-[24px]">
                                            Get started for free. 
                                        </p>
                                        <p className="block">
                                            Add your whole team as your needs grow.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-center mt-[40px] lg:mb-[40px]">
                                    <ButtonContact />
                                </div>
                                <p className="text-jogga-white font-light mt-[2px] text-center">
                                    Todos os direitos reservados. Desenvolvido por Jogga Digital Performance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
