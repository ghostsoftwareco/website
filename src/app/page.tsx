import Image from "next/image";
import {
  faWrench,
  faPersonRays,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Product from "@/components/Product";
import Button from "@/components/Button";
import Profile from "@/components/Profile";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
      <main className="flex flex-col gap-8 md:gap-14 min-h-screen">
        <Image
          src="/assets/gs-logo.png"
          alt="Ghost Software Logo"
          width="150"
          height="150"
          className="mx-auto mt-10 md:mt-20"
        />

        <p className="text-3xl md:text-4xl lg:text-6xl text-[#383838] px-4 md:px-12 lg:px-24 leading-tight font-medium">
          We&apos;re{" "}
          <span className="text-[#2361a3] font-bold no-underline ">
            Ghost Software.
          </span>{" "}
          We build technology to make your life{" "}
          <span className="text-[#2361a3] font-bold no-underline ">
            better, faster, and easier.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
          <Button
            icon={faWrench}
            text="What we make"
            href="#products"
            variant="secondary"
          />
          <Button
            icon={faPersonRays}
            text="Who we are"
            href="#team"
            variant="secondary"
          />
          <Button
            icon={faEnvelope}
            text="Get in touch"
            href="mailto:contact@ghostsoftware.co"
            variant="primary"
          />
        </div>
      </main>

      <section
        id="products"
        className="bg-[#2361a3] p-6 md:p-10 lg:p-14 rounded-lg shadow-[0_1.375em_0_#0a3461]"
      >
        <SectionTitle title="What We Make" icon={faWrench} whiteText />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <Product
            title="ReStore"
            description="Backup your reMarkable, to your own cloud."
            imageSrc="/assets/products/restore.png"
            imageAlt="ReStore"
            bgColor="bg-[#398791]"
            accentColor="bg-[#286068]"
            link="http://restore.ghostsoftware.co/"
          />

          <Product
            title="TrainSpotter"
            description="Never miss your train again. Coming soon."
            imageSrc="/assets/products/trainspotter.png"
            imageAlt="TrainSpotter Icon"
            bgColor="bg-[#3571c4]"
            accentColor="bg-[#1e4b8b]"
          />
        </div>
      </section>

      <section id="team" className="my-10 md:my-20">
        <div className="p-2.5 pb-8 rounded-lg">
          <SectionTitle title="Who We Are" icon={faPersonRays} />

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 justify-center mx-auto mt-10">
            <Profile
              name="Jacob Daitzman"
              imageSrc="/assets/profiles/jacob.jpg"
              url="https://www.linkedin.com/in/jdtzmn/"
            />
            <Profile
              name="Shai Mann-Robison"
              imageSrc="/assets/profiles/shai.png"
              url="https://www.linkedin.com/in/shai-mann-robison/"
            />
            <Profile
              name="Matan Kotler-Berkowitz"
              imageSrc="/assets/profiles/matan.png"
              url="https://www.linkedin.com/in/matankb/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
