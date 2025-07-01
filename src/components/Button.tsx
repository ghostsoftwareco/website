import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  icon: IconDefinition;
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  icon,
  text,
  href,
  variant = "secondary",
}: ButtonProps) {
  const baseClasses =
    "text-2xl inline-block px-5 py-2.5 border-3 rounded-md no-underline font-medium";

  const variantClasses = {
    primary:
      "bg-[#2361a3] border-[#2361a3] text-white shadow-[0_0.375em_0_black] hover:bg-[#12365e] hover:border-[#12365e] hover:shadow-[0_0.375em_0_#040f1d]",
    secondary:
      "shadow-[0_0.375em_0_#0a3461] border-[#00346c] text-[#00346c] hover:bg-[#eaf4ff]",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <FontAwesomeIcon icon={icon} className="mr-2.5" /> {text}
    </a>
  );
}
