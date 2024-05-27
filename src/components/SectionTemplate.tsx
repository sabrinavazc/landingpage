import Image, { StaticImageData } from "../../node_modules/next/image";
import { Container } from "./Container";
import { ButtonContact } from "./elements/ButtonContact";


interface SectionTemplateProps {
    bgColor: string;
    textColor: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    imageLayout: "intrinsic" | "fixed" | "responsive" | "fill";
    imageWidth: number;
    imageHeight: number;
    imageQuality: number;
    titleImageSrc: StaticImageData;
    titleImageAlt: string;
    titleImageWidth: number;
    titleImageHeight: number;
    titleImageQuality: number;
    titleImageStyle: React.CSSProperties;
  }
  
  export function SectionTemplate({
    bgColor,
    textColor,
    title,
    description,
    imageSrc,
    imageAlt,
    imageLayout,
    imageWidth,
    imageHeight,
    imageQuality,
    titleImageSrc,
    titleImageAlt,
    titleImageWidth,
    titleImageHeight,
    titleImageQuality,
    titleImageStyle,
  }: SectionTemplateProps) {
    return (
      <section className={`w-full ${bgColor} bg-no-repeat bg-center bg-cover relative`}>
        <Container>
          <div className="relative flex flex-col lg:flex-row items-center justify-center mx-auto lg:px-0 px-4">
            <div className="w-full lg:w-1/2 relative z-10 mt-8 lg:mt-32 lg:pl-10 lg:items-center lg:ml-0 lg:mr-12">
              <h1 className={`${textColor} text-4xl lg:text-6xl font-bold leading-tight mb-4 relative z-10`}>
                <span className="relative inline-block">
                  {title}
                  <Image
                    src={titleImageSrc}
                    alt={titleImageAlt}
                    className="absolute right-0 bottom-[30%] z-[-1] mr-[120px] lg:mr-[35px]"
                    style={titleImageStyle}
                    layout="fixed"
                    width={titleImageWidth}
                    height={titleImageHeight}
                    quality={titleImageQuality}
                  />
                </span>
              </h1>
              <p className={`${textColor} mt-[24px] text-[18px]`}>
                {description}
              </p>
              <div className="flex justify-center lg:justify-start mt-[60px] lg:mb-[140px] lg:gap-x-[98px]">
                <ButtonContact />
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative z-10 mt-[-100px] lg:mt-[140px] mb-6 lg:mb-[140px] lg:ml-0 lg:mr-[50px]">
              <div className="h-full flex items-center justify-center">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-contain w-full"
                  layout={imageLayout}
                  width={imageWidth}
                  height={imageHeight}
                  quality={imageQuality}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }