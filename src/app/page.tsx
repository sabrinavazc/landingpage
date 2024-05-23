import { SectionCustomise } from "@/components/sections/SectionCustomise";
import { SectionExtension } from "@/components/sections/SectionExtension";
import { SectionForm } from "@/components/sections/SectionForm";
import { SectionFreeTrial } from "@/components/sections/SectionFreeTrial";
import { SectionSponsors } from "@/components/sections/SectionSponsors";
import { SectionTestemonial } from "@/components/sections/SectionTestemonial";
import { SectionYourWork } from "@/components/sections/SectionYourWork";

export default function Home() {
  return (
    <>
    <SectionForm />
    <SectionExtension />
    <SectionCustomise />
    <SectionYourWork />
    <SectionSponsors />
    <SectionTestemonial />
    <SectionFreeTrial />
    </>
  );
}
