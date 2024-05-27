import Image from "../../../node_modules/next/image";
import Sponsors from "../../assets/sponsors.png";
import Yellow3 from "../../assets/yellow3.png";
import { SponsorsElements } from "../SponsorsElements";

export function SectionSponsors() {
    return (
        <section className="w-full h-[538px] bg-jogga-white bg-no-repeat bg-center bg-cover relative">
            <div className="w-full h-full flex items-center justify-center">
                <div className="max-w-[1919px] lg:h-[538px] lg:mt-[240px] w-full lg:px-0 lg:mx-[220px] mx-4 sm:mx-6 md:mx-8">
                    <div className="lg:mg-0 text-center lg:text-center">
                        <h1 className="text-jogga-black-text text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                            <span className="relative inline-block">
                                Our sponsors
                            </span>
                            <Image
                                src={Yellow3}
                                alt="yellow3 element"
                                className="absolute right-0 bottom-[5%] z-[-1] mr-[120px] lg:mr-[650px]"
                                style={{ transform: 'translate(50%, 50%)' }}
                                layout="fixed"
                                width={328.03}
                                height={42.47}
                                quality={100}
                            />
                        </h1>
                        <div className="flex items-around justify-center ml-0 lg:mt-[100px] mt-4 sm:mt-6 md:mt-8">
                            <div className="w-full">
                                <SponsorsElements />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}