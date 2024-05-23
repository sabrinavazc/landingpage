import Image from "../../../node_modules/next/image";
import { Container } from "../Container";
import Computer from "../../assets/computer.png";
import { ButtonContact } from "../elements/ButtonContact";
import yellow1 from "../../assets/yellow1.png";

export function SectionExtension() {
  return (
    <section className="w-full bg-jogga-blue bg-no-repeat bg-center bg-cover relative">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-center mx-auto lg:px-0 px-4 lg:mt-[140px] lg:mb-[140px] lg:mb-0 lg:pb-10"> {/* Adicionamos lg:pb-10 para adicionar espaçamento na margem inferior em telas menores */}
          <div className="w-full lg:w-1/2 relative z-10 mt-2 lg:mt-0 lg:mb-0 lg:ml-0 lg:mr-0">
            <div>
              <Image
                src={Computer}
                alt="Computer"
                className="object-contain w-full"
                layout="intrinsic"
                width={1000}
                height={600}
                quality={100}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-32 relative lg:pl-10 lg:items-center lg:ml-0 lg:mr-12">
            <h1 className="text-jogga-white text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
              <span className="relative inline-block">
                Use as Extension
                <Image
                  src={yellow1}
                  alt="Yellow"
                  className="absolute right-0 bottom-[30%] z-[-1] mr-[120px] lg:mr-[35px]"
                  style={{ transform: 'translate(50%, 50%)' }}
                  layout="fixed"
                  width={578}
                  height={69.79}
                  quality={100}
                />
              </span>
            </h1>
            <p className="text-jogga-white mt-[24px] text-[18px]">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
            <div className="flex justify-center lg:justify-start mt-[60px] lg:mb-[140px] lg:gap-x-[98px]">
              <ButtonContact />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
