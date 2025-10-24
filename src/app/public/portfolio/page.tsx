"use client";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div
      className="font-sans bg-amber-100 min-h-screen overflow-x-auto"
      data-aos="fade-up"
    >
      <main className="w-full h-screen">
        <Image
          className="dark:invert w-full h-full object-cover relative"
          src="/Green and Cream Simple Portfolio Cover Page Resume A3 Landscape.png"
          alt="Next.js logo"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute top-10 md:top-1/3 left-2 md:left-1/9 w-fit bg-[#f7f6f5]/50">
          {/* Mobile */}
          <h1 className="text-7xl font-bold text-[#75c8ae] break-normal md:hidden">
            PORTA FOLIO
          </h1>

          {/* Desktop */}
          <h1 className="hidden md:block text-8xl font-bold text-[#75c8ae] whitespace-nowrap">
            PORTAFOLIO
          </h1>
          <div className="mt-2 w-full max-w-3xl bottom-1/3 p-4">
            <div className="flex gap-4">
              <button className="p-2  border-1 border-[#FF3D81] text-[#FF3D81]  rounded-full hover:bg-[#FF3D81]/70 hover:text-white hover:text-[17px] hover:translate-y-1.5">
                Proyectos
              </button>
              <button className="p-2  border-1 border-[#7D3CFF] text-[#7D3CFF]  rounded-full">
                Lenguajes
              </button>
               <button className="p-2  border-1 border-[#ffa43c] text-[#ffa43c]  rounded-full">
                Base de datos
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
