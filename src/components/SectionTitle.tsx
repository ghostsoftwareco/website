import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SectionTitleProps {
  title: string;
  icon: IconProp;
  whiteText?: boolean;
}

export default function SectionTitle({
  title,
  icon,
  whiteText = false,
}: SectionTitleProps) {
  const colorClass = whiteText ? "text-[white]" : "text-[#2361a3]";

  return (
    <h2
      className={`font-medium text-3xl md:text-4xl lg:text-5xl ${colorClass} flex justify-center gap-2 md:gap-3 items-center mb-8 md:mb-14`}
    >
      <FontAwesomeIcon
        icon={icon}
        className="mr-2 md:mr-2.5 text-3xl md:text-4xl lg:text-5xl"
      />{" "}
      {title}
    </h2>
  );
}
