import React from "react";

export default function Hero() {
  return (
    <div
      className=" text-[16px] "
    >
      <div
        className="min-h-full bg-white text-[rgb(25,_25,_25)] tracking-[-0.08px] leading-[20px]"
        style={{
          fontFamily: '"Inter Tight", sans-serif',
          textDecoration: "rgb(25, 25, 25)",
        }}
      >
        <section className="relative">
          <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
            <div className="items-center flex flex-col justify-start w-full">
              <div className="items-center flex flex-col justify-center text-center gap-[22px] max-w-[510px] pt-[60px] md:pt-[110px] pr-[10px] pb-[60px] md:pb-[110px] pl-[10px] mx-auto">
                <h1 className="font-medium text-center text-[30px] md:text-[36px] leading-[1.15] md:leading-[38.88px] tracking-tight">
                  We are a London based digital studio working
                  to create unique experiences worldwide
                </h1>
                <a
                  href="/#about-section"
                  className="flex max-w-full text-center gap-[3px]"
                >
                  <div className="text-center">
                    Scroll to explore
                  </div>
                  <div className="overflow-hidden relative text-center">
                    <div className="text-center">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F46657def78055ab46d54c3030c13a743f6a0f877.svg?generation=1769877867408675&amp;alt=media"
                        className="inline-block overflow-clip text-center align-middle"
                        style={{
                          textDecoration: "rgb(25, 25, 25)",
                        }}
                      />
                    </div>
                    <div className="absolute text-center">
                      <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F46657def78055ab46d54c3030c13a743f6a0f877.svg?generation=1769877867408675&amp;alt=media"
                        className="inline-block overflow-clip text-center align-middle"
                        style={{
                          textDecoration: "rgb(25, 25, 25)",
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="items-center flex justify-center overflow-hidden relative w-full aspect-[3.5/4] md:aspect-[1.74/1] rounded-[0.1875rem] group">
                <div
                  className="bg-center bg-cover size-full absolute transition-transform duration-400 ease-in-out group-hover:scale-125"
                  style={{
                    backgroundImage:
                      'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9beaee00265779917849a6c4de533b3915d6e0c3.webp?generation=1769877867506894&alt=media")',
                    transform: "scale3d(1.03498, 1.03498, 1)",
                  }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-[0px_15px]">
              <div
                className="items-start flex flex-col justify-start mt-[15px] md:mt-[45px] gap-[22px] col-span-1 md:col-start-7 md:col-span-5"
              >
                <p>
                  Astra® is a creative studio crafting
                  impactful brands and seamless digital
                  experiences. Rooted in London, we collaborate
                  globally, shaping ideas into purposeful
                  designs that inspire and endure.
                </p>
                <a
                  href="/about"
                  className="flex max-w-full overflow-hidden relative h-[19.5px]"
                >
                  <div className="text-[14px]">
                    More about us
                  </div>
                  <div className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}