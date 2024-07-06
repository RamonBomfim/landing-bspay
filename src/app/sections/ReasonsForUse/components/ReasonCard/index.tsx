import { ReasonCardProps } from "@/types/ReasonCard";

export function ReasonCard({
  icon: Icon,
  title,
  description,
}: ReasonCardProps) {
  return (
    <div className="flex flex-col p-8 w-[24.125rem] md:w-[25.25rem] h-[17.75rem] md:h-[22.5rem] gap-2 md:gap-8 rounded-[1.875rem] border-2 border-green-primary">
      <Icon
        className="w-[4.625rem] h-auto text-green-primary"
        weight="duotone"
      />

      <div className="flex flex-col gap-2 md:gap-6 w-full">
        <h5 className="font-jakarta font-bold text-3xl md:text-4xl text-gray-black">
          {title}
        </h5>

        <p className="font-jakarta font-regular text-lg md:text-xl text-gray-text">
          {description}
        </p>
      </div>
    </div>
  );
}
