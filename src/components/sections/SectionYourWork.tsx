import Image from "../../../node_modules/next/image";
import { ButtonContact } from "../elements/ButtonContact";
import Blue1 from "../../assets/blue1.png";
import Abstract from "../../assets/abstract.png";

export function SectionYourWork() {
    return (
    <section className="w-full h-[574px] bg-jogga-blue bg-no-repeat bg-center bg-cover relative">
        <Image
        src={Abstract}
        alt="image abstract"
        className="absolute left-0 top-[-50%] z-[1]"
        quality={100}
        />
        <div className="w-full h-[574px] mx-auto flex items-center justify-center">
            <div className="flex flex-col items-center lg:flex-row lg:items-center  lg:justify-center lg:px-0 px-8 mt-[20px] h-full">
                <div className="w-full lg:w-[1064px] h-171 mt-8 lg:mt-32 relative lg:pl-12 lg:items-center lg:ml-0 lg:mr-12">
                    <div className="lg:ml-0 text-center lg:text-center">
                        <h1 className="text-jogga-white text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                            <span className="relative inline-block">Your work, everywhere you are
                            </span>
                        <Image
                        src={Blue1}
                        alt="blue1"
                        className="absolute right-0 bottom-[10%] z-[-1] mr-[150px]"
                        style={{ transform: 'translate(50%, 50%)' }}
                        layout="fixed"
                        width={314.01}
                        height={23.96}
                        quality={100}
                        />
                        </h1>
                        <p className="text-jogga-white mt-[24px] text-18">
                        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                        <div className="flex justify-center lg:justify-center mt-[60px] lg:mb-10">
                        <ButtonContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
