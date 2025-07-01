import Image from "next/image";

interface ProfileProps {
  name: string;
  imageSrc: string;
}

export default function Profile({ name, imageSrc }: ProfileProps) {
  return (
    <div className="flex justify-center flex-col items-center">
      <Image
        src={imageSrc}
        alt={`${name} Picture`}
        width={240}
        height={240}
        className="rounded-full w-48 sm:w-56 md:w-60 aspect-square border-[#0a3461] border-4 sm:border-5 md:border-7 bg-[#f0be8d]"
      />
      <h3 className="font-normal m-0 mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl">
        {name}
      </h3>
    </div>
  );
}
