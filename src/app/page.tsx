import { Navbar } from "@/components/global/navbar";
import Image from "next/image";
import LetterGlitch from "@/components/global/landing-page";
import { string } from "zod";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        />
      </div>
    </main>
  );
}
