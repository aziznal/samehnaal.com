import { LucideMail, LucideScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center min-h-dvh h-[500vh] pb-80 scroll-mt-24"
      id="home"
      style={{
        background: "url('/main.svg') top center / cover repeat",
      }}
    >
      <nav className="flex justify-center items-center py-3 sticky top-0 w-full border-b border-slate-800 mb-[16vh] backdrop-blur px-4">
        <div className="flex justify-between items-center w-[900px]">
          <Link href="/" className="flex items-center gap-4 font-bold font-[arial] text-xl">
            <Image
              src="/custom-logo.svg"
              width="200"
              height="200"
              alt="logo"
              className="w-[42px]"
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

      <h1 className="font-bold text-5xl sm:text-6xl mb-8 flex flex-col text-center gap-2">
        <span>Sameh Naal.</span>

        <span>Graphic Designer.</span>
      </h1>

      <span className="text-slate-400 text-balance lg:w-[700px] text-center mb-12 text-sm sm:text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maiores
        sapiente porro amet a molestiae dolores, iure totam impedit quasi.
      </span>

      <h2
        className="text-rose-500 mb-10 text-sm font-medium scroll-mt-24"
        id="my-work"
      >
        MY WORK
      </h2>

      <div className="flex items-center flex-wrap lg:w-[900px] gap-6 justify-center mb-16">
        <CategoryCard
          imageSrc=""
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptatem."
        />

        <CategoryCard
          imageSrc=""
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptatem."
        />

        <CategoryCard
          imageSrc=""
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptatem."
        />

        <CategoryCard
          imageSrc=""
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptatem."
        />

        <CategoryCard
          imageSrc=""
          title="Lorem"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptatem."
        />
      </div>

      <h2
        className="text-rose-500 mb-10 text-sm font-medium scroll-mt-24"
        id="contact"
      >
        CONTACT
      </h2>

      <div className="flex gap-4 items-center">
        <Link
          className="px-3 py-2 hover:bg-slate-800 transition-colors border border-slate-800 rounded-full text-xs sm:text-sm flex items-center gap-2"
          href="mailto:samehn2000@gmail.com"
        >
          <LucideMail />
          Email me
        </Link>

        <Link
          className="px-3 py-2 hover:bg-slate-800 transition-colors border border-slate-800 rounded-full text-xs sm:text-sm flex items-center gap-2"
          href="/cv.pdf"
          target="_blank"
        >
          <LucideScrollText />
          See my CV
        </Link>
      </div>
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

type CategoryCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

function CategoryCard({ imageSrc, title, description }: CategoryCardProps) {
  return (
    <div className="border border-slate-800 h-[400px] w-[275px] p-1.5 rounded-xl transition-all hover:bg-slate-800 cursor-pointer">
      {/* TODO: replace with an image */}
      {/* <Image src={imageSrc} width={800} height={800} alt="imageSrc" /> */}

      <div className="w-full bg-slate-600 h-[275px] rounded-lg mb-3" />

      <div className="px-2">
        <h3 className="font-medium mb-1">{title}</h3>

        <span className="text-slate-400 text-sm">{description}</span>
      </div>
    </div>
  );
}
