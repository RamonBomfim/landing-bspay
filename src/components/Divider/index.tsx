import Image from "next/image";
import divider from "../../assets/divider.png";

export function Divider({ optionalClass }: { optionalClass?: string }) {
  return (
    <div className={`flex items-center ${optionalClass}`}>
      <div className="w-1/2 h-0.5 bg-gray-400"></div>
      <Image
        src={divider}
        alt="Divisão de seção"
        sizes="100vw"
        className="w-9 h-auto z-10"
        priority
      />
      <div className="w-1/2 h-0.5 bg-gray-400"></div>
    </div>
  );
}
