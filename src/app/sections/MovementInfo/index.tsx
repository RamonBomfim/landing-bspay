import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import cash from "../../../assets/cash.svg";
import sale from "../../../assets/sale.svg";
import { InfoCard } from "./components/InfoCard";

export function MovementInfo() {
  return (
    <SectionContainer
      additionalContainerClass="items-center gap-12 md:gap-16 py-[4.375rem] px-[1.375rem] md:px-0 relative"
      additionalSectionClass="bg-gray-black h-auto md:max-h-[24.6875rem]"
    >
      <Image
        src={cash}
        alt="Imagem de bolo de dinherio 3D"
        sizes="100vw"
        className="w-[6.25rem] md:w-[10.75rem] h-auto absolute bottom-[-5rem] md:bottom-[-7.0625rem]  left-0 md:left-[-5.3rem]"
        priority
      />

      <h4 className="font-jakarta font-bold text-3xl md:text-5xl text-center md:text-left text-gray-white">
        Escale seu negócio com a BsPay.
      </h4>

      <div className="flex flex-col md:flex-row items-center md:justify-center w-full md:w-auto gap-5 md:gap-10 px-6 md:px-0">
        <InfoCard title="+ R$ 2 bilhões" subtitle="movimentados anualmente" />
        <InfoCard title="+ 900 milhões" subtitle="movimentados anualmente" />
      </div>

      <Image
        src={sale}
        alt="Imagem de selo de liquidação"
        sizes="100vw"
        className="w-[6.25rem] md:w-[10.75rem] h-auto absolute top-[-6.25rem] md:top-[-8.625rem] right-0 md:right-[-5.3rem]"
        priority
      />
    </SectionContainer>
  );
}
