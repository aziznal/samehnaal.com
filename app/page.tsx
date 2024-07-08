import { CategoryCard } from "@/components/CategoryCard";
import { LucideMail, LucidePhoneCall, LucideScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center min-h-dvh scroll-mt-24"
      id="home"
      style={{
        background: "url('/main.svg') top center / cover repeat",
      }}
    >
      <nav className="flex justify-center items-center py-3 sticky top-0 w-full mb-[16vh] backdrop-blur bg-opacity-50 bg-slate-900 px-4">
        <div className="flex justify-between items-center w-[900px]">
          <Link
            href="/"
            className="flex items-center gap-4 font-bold font-[arial] text-md sm:text-xl"
          >
            <Image
              src="/custom-logo.svg"
              width="200"
              height="200"
              alt="logo"
              className="w-[30px] sm:w-[42px]"
            />
            Sameh Naal
          </Link>

          <div className="flex gap-4 sm:gap-8 items-center">
            <NavLink href="#home">Home</NavLink>

            <NavLink href="#my-work">My Work</NavLink>

            <Link
              className="px-3 py-2 hover:bg-slate-800 transition-colors border border-slate-800 rounded-full text-xs sm:text-sm"
              href="#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <h1 className="font-bold text-4xl sm:text-6xl mb-8 flex flex-col text-center text-balance">
        <span>Sameh Naal.</span>

        <span>Industrial Graphic Designer.</span>
      </h1>

      <span className="text-slate-400 text-balance lg:w-[700px] text-center mb-20 text-sm sm:text-md">
        25+ years of experience with designing 3D models for plastic molds, sand
        casted parts, and more. Proven real world experience with numerous
        satisfied clients.
      </span>

      <h2
        className="text-rose-500 mb-10 text-sm font-medium scroll-mt-24 text-center"
        id="my-work"
      >
        MY WORK
      </h2>

      <div className="flex items-center flex-wrap lg:w-[900px] gap-6 justify-center mb-24">
        <CategoryCard
          thumbnailSrc="/portfolio/general/001.png"
          images={[
            "/portfolio/general/001.png",
            "/portfolio/general/002.png",
            "/portfolio/general/003.png",
            "/portfolio/general/004.png",
            "/portfolio/general/005.png",
            "/portfolio/general/006.png",
            "/portfolio/general/007.png",
            "/portfolio/general/008.png",
            "/portfolio/general/009.png",
          ]}
          thumbnailAlignment="object-left"
          title="General"
          description="A general overview of the type of work that I do, including complex designs and molds."
        />

        <CategoryCard
          thumbnailSrc="/portfolio/plastic-injection/Iveco filter/filter cover.png"
          images={[
            "/portfolio/plastic-injection/Elbow/Elbow mold.png",
            "/portfolio/plastic-injection/Elbow/Elbow.png",
            "/portfolio/plastic-injection/Iveco filter/From STL to 3D Model.png",
            "/portfolio/plastic-injection/Iveco filter/STL.png",
            "/portfolio/plastic-injection/Iveco filter/filter cover.png",
            "/portfolio/plastic-injection/Iveco filter/Iveco.mp4",
          ]}
          title="Plastic Injection"
          description="Previews of Plastic injection molds where I both make the 3d models as well as design the mechanical motions of the mold"
        />

        <CategoryCard
          thumbnailSrc="/portfolio/sand-casting/From STL to 3D Model4-1.png"
          images={[
            "/portfolio/sand-casting/From STL to 3D Model4-1.png",
            "/portfolio/sand-casting/From STL to 3D Model5.png",
            "/portfolio/sand-casting/STL5.png",
          ]}
          title="Sand Casting"
          description="Real world examples that I've designed of highly complex sand casted parts with many challenging aspects"
        />
      </div>

      <h2
        className="text-rose-500 mb-10 text-sm font-medium scroll-mt-24 text-center"
        id="contact"
      >
        CONTACT
      </h2>

      <div className="flex flex-wrap justify-center gap-4 items-center mb-64 px-4">
        <Link
          className="px-3 py-2 hover:bg-slate-800 transition-colors border border-blue-800 rounded-full text-xs sm:text-sm flex items-center gap-2 text-nowrap"
          href="mailto:samehn2000@gmail.com"
        >
          <LucideMail />
          samehn2000@gmail.com
        </Link>

        <Link
          className="px-3 py-2 hover:bg-slate-800 transition-colors border border-purple-900 rounded-full text-xs sm:text-sm flex items-center gap-2 text-nowrap"
          href="/cv.pdf"
          target="_blank"
        >
          <LucideScrollText />
          See my CV
        </Link>

        <Link
          className="px-3 py-2 hover:bg-slate-800 transition-colors border border-emerald-900 rounded-full text-xs sm:text-sm flex items-center gap-2 text-nowrap"
          href="tel:+905318309103"
          target="_blank"
        >
          <LucidePhoneCall />
          +90 531 830 91 03
        </Link>
      </div>

      <footer className="flex flex-col gap-4 items-center justify-center pb-8">
        <span className="text-sm text-slate-600">samehnaal.com - 2024</span>

        <span className="text-xs opacity-30">
          made by{" "}
          <Link
            href="https://aziznal.com"
            className="text-rose-600"
            target="_blank"
          >
            aziznal
          </Link>
        </span>
      </footer>
    </div>
  );
}

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="hover:underline text-xs sm:text-sm">
      {children}
    </Link>
  );
}
