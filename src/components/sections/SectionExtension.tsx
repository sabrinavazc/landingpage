import { SectionTemplate } from "../SectionTemplate";
import Computer from "../../assets/computer.png";

import yellow1 from "../../assets/yellow1.png";


export function SectionExtension() {
  return (
    <SectionTemplate
      bgColor="bg-jogga-blue"
      textColor="text-jogga-white"
      title="Use as Extension"
      description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
      imageSrc={Computer}
      imageAlt="Computer"
      imageLayout="intrinsic"
      imageWidth={1000}
      imageHeight={600}
      imageQuality={100}
      titleImageSrc={yellow1}
      titleImageAlt="Yellow1"
      titleImageWidth={578}
      titleImageHeight={69.79}
      titleImageQuality={100}
      titleImageStyle={{ transform: 'translate(50%, 50%)' }}
    />
  )
}
