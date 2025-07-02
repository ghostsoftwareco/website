import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

interface ProductProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  accentColor: string;
  link?: string;
}

export default function Product({
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor,
  accentColor,
  link,
}: ProductProps) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={`rounded-lg ${accentColor} pb-2`}
    >
      <div className={`${bgColor} flex rounded-lg p-3`}>
        <div className="flex justify-between w-full items-center">
          <div className="flex">
            <div className="flex flex-col items h-full rounded-3xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={64}
                height={64}
                className="w-16 h-16 md:w-24 md:h-24"
              />
            </div>
            <div className="flex flex-col justify-center items-start pl-3 md:pl-5">
              <h3 className="m-0 text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                {title}
              </h3>
              <p className="m-0 mt-1 text-white text-base md:text-lg font-[300] text-left">
                {description}
              </p>
            </div>
          </div>
          {link && (
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              className="mr-4 md:mr-8 text-3xl md:text-4xl lg:text-5xl text-white"
            />
          )}
        </div>
      </div>
    </a>
  );
}
