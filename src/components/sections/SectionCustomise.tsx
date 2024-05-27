import { SectionTemplate } from "../SectionTemplate";
import Android from "../../assets/android.png";

import yellow2 from "../../assets/yellow2.png";


export function SectionCustomise() {
  return (
    <SectionTemplate
      bgColor="bg-jogga-white"
      textColor="text-jogga-black-text"
      title="Customize it to your needs"
      description="Customise the app with plugins, custom themes e multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      imageSrc={Android}
      imageAlt="robot-android"
      imageLayout="intrinsic"
      imageWidth={1920}
      imageHeight={748}
      imageQuality={100}
      titleImageSrc={yellow2}
      titleImageAlt="Yellow2"
      titleImageWidth={578}
      titleImageHeight={69.79}
      titleImageQuality={100}
      titleImageStyle={{ transform: 'translate(50%, 50%)' }}
    />
  )
}
