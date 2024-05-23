import Image from "../../../node_modules/next/image";
import { Container } from "../Container";
import Android from "../../assets/android.png";
import { ButtonContact } from "../elements/ButtonContact";
import yellow2 from "../../assets/yellow2.png";


export function SectionCustomise() {
  return (
    <section className="w-full bg-jogga-white bg-no-repeat bg-center bg-cover relative">
      <Container>
        <div className="relative flex flex-col lg:flex-row items-center justify-center mx-auto lg:px-0 px-4">
          <div className="w-full lg:w-[638px] h-[411px] mt-8 lg:mt-32 relative lg:pl-12 lg:items-center lg:ml-0 lg:mr-12">
            <div className="lg:ml-[-60px]">
              <h1 className="text-jogga-black-text text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10">
                <span className="inline-block">Customize it to </span>
                <span className="inline-block">your needs</span>
                <Image
                  src={yellow2}
                  alt="Yellow2"
                  className="absolute right-0 bottom-[20%] z-[-1] mr-[350px]"
                  style={{ transform: 'translate(50%, 50%)' }}
                  layout="fixed"
                  width={578}
                  height={69.79}
                  quality={100}
                />
              </h1>
              <p className="text-jogga-black-text mt-[24px] text-[18px]">
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
              <div className="flex justify-center lg:justify-start mt-[60px] lg:mb-[140px]">
                <ButtonContact />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] max-w-lg h-[525px] relative z-10 mt-[-100px] lg:mt-[140px] lg:mb-[140px] lg:ml-0 lg:mr-[50px]">
            <div className="h-full flex items-center justify-center">
              <Image
                src={Android}
                alt="robot-android"
                className="object-contain w-full"
                layout="intrinsic"
                width={1920}
                height={748}
                quality={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}