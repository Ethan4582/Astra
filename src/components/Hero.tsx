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
        <nav className="relative">
          <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
            <div className="items-center flex justify-between h-[17px] mt-[25px]">
              <a
                href="https://aubreyfolio-template.webflow.io/"
                className="flex max-w-full gap-[3px]"
              >
                <img
                  alt="Astra Template Logo"
                  src="/assets/logo.png"
                  className="block overflow-clip align-middle w-[65px]"
                />
              </a>
              <div className="items-center flex justify-start gap-[30px]">
                <div className="items-center flex justify-center gap-[22px]">
                  <a
                    href="/works"
                    className="flex max-w-full overflow-hidden relative h-[19.5px]"
                  >
                    <div className="text-[14px]">Works</div>
                    <div
                      className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                      style={{
                        transform:
                          "translate3d(-105%, 0px, 0px)",
                      }}
                    ></div>
                  </a>
                  <a
                    href="/about"
                    className="flex max-w-full overflow-hidden relative h-[19.5px]"
                  >
                    <div className="text-[14px]">About</div>
                    <div
                      className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                      style={{
                        transform:
                          "translate3d(-105%, 0px, 0px)",
                      }}
                    ></div>
                  </a>
                  <a
                    href="/about#services"
                    className="flex max-w-full overflow-hidden relative h-[19.5px]"
                  >
                    <div className="text-[14px]">Services</div>
                    <div
                      className="border-t -mt-px absolute w-full left-[0%] right-[0%] bottom-[0%] border-[rgb(25,_25,_25)]"
                      style={{
                        transform:
                          "translate3d(-105%, 0px, 0px)",
                      }}
                    ></div>
                  </a>
                </div>
                <a
                  href="mailto:singhashirwad2003@gmail.com"
                  className="items-center flex justify-center max-w-full overflow-hidden relative h-7 bg-[rgb(240,_240,_240)] text-[13px] pt-0 pr-[11px] pb-0 pl-[11px] rounded-[81.25rem]"
                >
                  <div className="z-[2]">Get in touch</div>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="relative">
          <div className="pt-0 pr-[15px] pb-0 pl-[15px]">
            <div className="items-center flex flex-col justify-start w-full">
              <div className="items-center flex flex-col justify-center text-center gap-[22px] max-w-[510px] pt-[110px] pr-0 pb-[110px] pl-0">
                <h1 className="font-medium text-center text-[36px] leading-[38.88px]">
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
              <div className="items-center flex justify-center overflow-hidden relative w-full aspect-[1.74_/_1] rounded-[0.1875rem]">
                <div
                  className="bg-center bg-cover size-full absolute"
                  style={{
                    backgroundImage:
                      'url("https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9beaee00265779917849a6c4de533b3915d6e0c3.webp?generation=1769877867506894&alt=media")',
                    transform: "scale3d(1.03498, 1.03498, 1)",
                  }}
                ></div>
              </div>
            </div>
            <div className="grid-cols-12 grid w-full grid-rows-[auto] gap-[0px_15px]">
              <div
                className="items-start flex flex-col justify-start mt-[45px] gap-[22px]"
                style={{ gridArea: "1 / 7 / 2 / 12" }}
              >
                <p>
                  Astra® is a creative studio crafting
                  impactful brands and seamless digital
                  experiences. Rooted in London, we collaborate
                  globally, shaping ideas into purposeful
                  designs that inspire and endure.
                </p>
                <a
                  href="https://aubreyfolio-template.webflow.io/works"
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